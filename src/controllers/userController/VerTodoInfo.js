const { pool } =  require("../../db");

const getComercianteAndcomercioInfo = async (req, res) => {
  const { folio } = req.query;
  console.log(folio);
  try {
    const rawData = await pool.query(
      `SELECT
      co.*,
      ce.*,
      dco.*,
      dce.*,
      dco.calle AS calle_comercio,
      dco.colonia AS colonia_comercio,
      dce.calle AS calle_comerciante,
      dce.colonia AS colonia_comerciante
    FROM
      comercios AS co
      INNER JOIN comerciantes AS ce ON co.comerciante_id_comerciante = ce.id_comerciante
      LEFT JOIN direcciones_comercios AS dco ON dco.comercio_id_comercio = co.id_comercio
      LEFT JOIN direcciones_comerciantes AS dce ON dce.id_comerciante = ce.id_comerciante
    WHERE
      co.id_comercio = $1
    `,
      [folio]
    );
    const telefonos = await getComerciantePhones(folio);
    const formatedData = rawData.rows[0];
    formatedData.telefonos = telefonos;


    res.status(200).json({ data: formatedData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getComerciantePhones = async (folio) => {
const query = `Select * from telefonos where id_comerciante = (select comerciante_id_comerciante from comercios where id_comercio = $1)`
const result = await pool.query(query, [folio]);
return result.rows;
};

module.exports = {
  getComercianteAndcomercioInfo,
};
