const { pool } = require("../../../db");
const baja = async (req, res) => {
  const { folio } = req.body;
  console.log(folio)
  try {
    await queryToDatabase(folio);
    res.status(200).end('Baja exitosa');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error en el registro" });
  }
}

const queryToDatabase = async (folio) => {
  const query = `UPDATE comercios SET cancelaciones_bajas = true where id_comercio = $1`
  await pool.query(query, [folio]);
}

module.exports = {
  baja
}