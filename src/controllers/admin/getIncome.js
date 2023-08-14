const { pool } = require("../../db");
const axios = require("axios");

const getIncome = async (req, res) => {
  const query = `SELECT
  SUM(CASE WHEN pagado = true AND EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) THEN total ELSE 0 END) AS total_pagado_anio_actual,
  SUM(CASE WHEN pagado = true AND EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) AND EXTRACT(MONTH FROM fecha) = EXTRACT(MONTH FROM CURRENT_DATE) THEN total ELSE 0 END) AS total_pagado_mes_actual,
  SUM(CASE WHEN pagado = true AND EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) AND EXTRACT(ISOYEAR FROM fecha) = EXTRACT(ISOYEAR FROM CURRENT_DATE) AND EXTRACT(WEEK FROM fecha) = EXTRACT(WEEK FROM CURRENT_DATE) THEN total ELSE 0 END) AS total_pagado_semana_actual,
  SUM(CASE WHEN pagado = true AND fecha::date = CURRENT_DATE THEN total ELSE 0 END) AS total_pagado_hoy
  FROM ordenes_pago
  WHERE EXTRACT(YEAR FROM fecha) = EXTRACT(YEAR FROM CURRENT_DATE) OR fecha::date = CURRENT_DATE;
`;

  try {
    const rawDashboardInfo = await axios.get(
      `http://${process.env.API_HOST}:4000/admin/getDashboardInformation`
    );
    const dashboardInfo = rawDashboardInfo.data;
    const rawResult = await pool.query(query);
    const result = rawResult.rows;
    const data = {
      graphInfo: dashboardInfo,
      topInfo: result,
    };
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getIncome };
