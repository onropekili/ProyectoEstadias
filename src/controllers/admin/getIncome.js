const {pool} = require("../../db");
const axios = require("axios");

const getIncome = async (req, res) => {
  const queryForTopInfo = `SELECT
  SUM(CASE WHEN pagado = true AND EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) THEN total ELSE 0 END) AS total_pagado_anio_actual,
  SUM(CASE WHEN pagado = true AND EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) AND EXTRACT(MONTH FROM fecha) = EXTRACT(MONTH FROM CURRENT_DATE) THEN total ELSE 0 END) AS total_pagado_mes_actual,
  SUM(CASE WHEN pagado = true AND EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) AND EXTRACT(ISOYEAR FROM fecha) = EXTRACT(ISOYEAR FROM CURRENT_DATE) AND EXTRACT(WEEK FROM fecha) = EXTRACT(WEEK FROM CURRENT_DATE) THEN total ELSE 0 END) AS total_pagado_semana_actual,
  SUM(CASE WHEN pagado = true AND fecha::date = CURRENT_DATE THEN total ELSE 0 END) AS total_pagado_hoy
  FROM ordenes_pago
  WHERE EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) OR fecha::date = CURRENT_DATE;
`;
  const weekclyQuery = `SELECT
  COUNT(*) AS cantidad_ordenes,
  SUM(total) AS suma_montos,
  fecha,
  CASE
    WHEN AGE(CURRENT_DATE, fecha) = INTERVAL '1 day' THEN 'Hace 1 día'
    ELSE 'Hace ' || EXTRACT(DAY FROM AGE(CURRENT_DATE, fecha)) || ' días'
  END AS formato_dias
FROM ordenes_pago
WHERE fecha >= (CURRENT_DATE - INTERVAL '5 days') AND pagado = true
GROUP BY fecha, formato_dias
ORDER BY fecha DESC;
`;
  const monthlyQuery = `SELECT
  COUNT(*) AS cantidad_ordenes,
  SUM(total) AS suma_montos,
  fecha,
  '01/' || TO_CHAR(CURRENT_DATE, 'MM/YYYY') AS fecha_inicio,
  TO_CHAR(CURRENT_DATE, 'DD/MM/YYYY') AS fecha_termino,
  CASE
    WHEN AGE(CURRENT_DATE, fecha) <= INTERVAL '1 month' THEN 'Hace ' || EXTRACT(MONTH FROM AGE(CURRENT_DATE, fecha)) || ' mes'
    ELSE 'Hace ' || EXTRACT(MONTH FROM AGE(CURRENT_DATE, fecha)) || ' meses'
  END AS formato_meses
FROM ordenes_pago
WHERE fecha >= (CURRENT_DATE - INTERVAL '6 months') AND pagado = true
GROUP BY fecha, formato_meses
ORDER BY fecha DESC`

  const yearlyQuery = `SELECT
  COUNT(*) AS cantidad_ordenes,
  SUM(total) AS suma_montos,
  fecha,
  '01/' || TO_CHAR(CURRENT_DATE, 'MM/YYYY') AS fecha_inicio,
  TO_CHAR(CURRENT_DATE, 'DD/MM/YYYY') AS fecha_termino,
  CASE
    WHEN AGE(CURRENT_DATE, fecha) <= INTERVAL '1 month' THEN 'Hace ' || EXTRACT(MONTH FROM AGE(CURRENT_DATE, fecha)) || ' mes'
    ELSE 'Hace ' || EXTRACT(MONTH FROM AGE(CURRENT_DATE, fecha)) || ' meses'
  END AS formato_meses
FROM ordenes_pago
WHERE fecha >= (CURRENT_DATE - INTERVAL '1 year') AND pagado = true
GROUP BY fecha, formato_meses
ORDER BY fecha DESC`

  try {
    const rawDashboardInfo = await axios.get(
      `http://${process.env.REACT_APP_HOST}:4000/admin/getDashboardInformation`
    );
    const dashboardInfo = rawDashboardInfo.data;
    const rawTopInfoResult = await pool.query(queryForTopInfo);
    const result = rawTopInfoResult.rows;
    const rawWeekclyQuery = await pool.query(weekclyQuery);
    const weekclyResult = rawWeekclyQuery.rows;
    const rawMonthlyQuery = await pool.query(monthlyQuery);
    const monthlyResult = rawMonthlyQuery.rows;
    const rawYearlyQuery = await pool.query(yearlyQuery);
    const yearlyResult = rawYearlyQuery.rows;
    const data = {
      graphInfo: dashboardInfo,
      topInfo: result,
      weekclyInfo: weekclyResult,
      monthlyInfo: monthlyResult,
      yearlyInfo: yearlyResult,
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};




module.exports = {getIncome};
