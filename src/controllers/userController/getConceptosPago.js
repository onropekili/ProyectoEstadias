const { pool } = require("../../db");

const getConceptosPago = async (req, res) => {
  try {
    const rawConceptosPago = await pool.query(
      `SELECT idconcepto, concepto, importe, (select unidad.unidad from unidad where unidad.idunidad = conceptos_pago.unidad) as unidad FROM conceptos_pago;`
    );
    const formatedConceptosPago = rawConceptosPago.rows;

    res.status(200).json({ conceptos: formatedConceptosPago });
  } catch (error) {
    res.status(500).json({ error: error });
    console.log(error);
  }
};

module.exports = {
  getConceptosPago,
};
