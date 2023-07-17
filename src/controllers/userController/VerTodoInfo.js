const { pool } =  require("../../db");

const getComercianteAndcomercioInfo = async (req, res) => {
  const { folio } = req.query;
  try {
    const data = await pool.query(
      "Select * from comercios as co inner join comerciantes as ce on co.comerciante_id_comerciante = ce.id_comerciante inner join direcciones_comercios as dco on dco.comercio_id_comercio = co.id_comercio inner join direcciones_comerciantes as dce on dce.id_comerciante = ce.id_comerciante where ce.id_comerciante = $1",
      [folio]
    );

    res.status(200).json({ data: data.rows });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getComercianteAndcomercioInfo,
};
