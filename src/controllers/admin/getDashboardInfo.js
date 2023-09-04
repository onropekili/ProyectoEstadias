const { pool } = require("../../db");

const getDashoardinformation = async (req, res) => {
  try {
    const query = `SELECT 
    (select count(id_usuario) from usuario) as total_usuarios, 
    (select count(id_comercio) from comercios) as total_comercios,
    (select count(id_comerciante) from comerciantes) as total_comerciantes,
    (select sum(total) from ordenes_pago where pagado = true and fecha >= current_date) as total_ventas_hoy`;
    const rawResult = await pool.query(query);
    const topInfo = rawResult.rows[0];

    const queryDayGraph = `WITH dias_semana AS (
      SELECT generate_series(
          CURRENT_DATE - INTERVAL '6 days', 
          CURRENT_DATE, 
          INTERVAL '1 day'
      )::date AS dia
  )
  
  SELECT 
      CASE 
          WHEN DATE_PART('dow', ds.dia) = 0 THEN 'Domingo'
          WHEN DATE_PART('dow', ds.dia) = 1 THEN 'Lunes'
          WHEN DATE_PART('dow', ds.dia) = 2 THEN 'Martes'
          WHEN DATE_PART('dow', ds.dia) = 3 THEN 'Miércoles'
          WHEN DATE_PART('dow', ds.dia) = 4 THEN 'Jueves'
          WHEN DATE_PART('dow', ds.dia) = 5 THEN 'Viernes'
          WHEN DATE_PART('dow', ds.dia) = 6 THEN 'Sábado'
      END AS dia_semana,
      COALESCE(SUM(CASE WHEN op.pagado = true THEN op.total ELSE 0 END), 0) AS total_semana
  FROM dias_semana ds
  LEFT JOIN ordenes_pago op ON ds.dia = op.fecha
  WHERE DATE_PART('dow', ds.dia) NOT IN (0, 6) -- Excluir domingo (0) y sábado (6)
  GROUP BY ds.dia, dia_semana
  ORDER BY ds.dia;
  `

    const rawResultDayGraph = await pool.query(queryDayGraph);
    const dayGraph = rawResultDayGraph.rows;

    const queryWeekGraph = `WITH semanas AS (
      SELECT generate_series(
          DATE_TRUNC('week', NOW() - INTERVAL '3 weeks'),
          DATE_TRUNC('week', NOW()),
          INTERVAL '1 week'
      ) AS semana
  )
  SELECT
      TO_CHAR(s.semana, 'YYYY-MM-DD') AS semana,
      COALESCE(SUM(CASE WHEN op.pagado = true THEN op.total ELSE 0 END), 0) AS total_semana
  FROM
      semanas s
  LEFT JOIN
      ordenes_pago op ON DATE_TRUNC('week', op.fecha) = s.semana
  GROUP BY
      s.semana
  ORDER BY
      s.semana DESC;
  `

    const rawResultWeekGraph = await pool.query(queryWeekGraph);
    const weekGraph = rawResultWeekGraph.rows;

    const queryMonthGraph = `WITH meses AS (
      SELECT generate_series(
          DATE_TRUNC('month', NOW() - INTERVAL '6 months'),
          DATE_TRUNC('month', NOW()),
          INTERVAL '1 month'
      ) AS mes
  )
  SELECT
      TO_CHAR(m.mes, 'YYYY-MM') AS mes,
      COALESCE(SUM(CASE WHEN op.pagado = true THEN op.total ELSE 0 END), 0) AS total_mes
  FROM
      meses m
  LEFT JOIN
      ordenes_pago op ON DATE_TRUNC('month', op.fecha) = m.mes
  GROUP BY
      m.mes
  ORDER BY
      m.mes;
  `

    const rawResultMonthGraph = await pool.query(queryMonthGraph);
    const monthGraph = rawResultMonthGraph.rows;

    const queryYearGraph = `WITH meses AS (
      SELECT generate_series(
          DATE_TRUNC('month', NOW() - INTERVAL '1 year'),
          DATE_TRUNC('month', NOW()),
          INTERVAL '1 month'
      ) AS mes
  )
  SELECT
      TO_CHAR(m.mes, 'YYYY-MM') AS mes,
      COALESCE(SUM(CASE WHEN op.pagado = true THEN op.total ELSE 0 END), 0) AS total_mes
  FROM
      meses m
  LEFT JOIN
      ordenes_pago op ON DATE_TRUNC('month', op.fecha) = m.mes
  GROUP BY
      m.mes
  ORDER BY
      m.mes;`;

    const rawResultYearGraph = await pool.query(queryYearGraph);
    const yearGraph = rawResultYearGraph.rows;

    const data = {
      topInfo: topInfo,
      dayGraph: dayGraph,
      weekGraph: weekGraph,
      monthGraph: monthGraph,
      yearGraph: yearGraph
    }


    res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {getDashoardinformation};

