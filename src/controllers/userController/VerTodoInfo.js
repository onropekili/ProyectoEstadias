const { pool } =  require("../../db");

const getComercianteAndcomercioInfo = async (req, res) => {
  const { folio } = req.query;
  console.log(folio);
  try {
    const data = await pool.query(
      `SELECT
      co.*,
      ce.*,
      dco.*,
      dce.*,
      dco.calle AS calle_comercio,
      dco.colonia AS colonia_comercio,
      dce.calle AS calle_comerciante,
      dce.colonia AS colonia_comerciante,
      STRING_AGG(tel.numero_telefonico, ', ') AS telefonos
    FROM
      comercios AS co
      INNER JOIN comerciantes AS ce ON co.comerciante_id_comerciante = ce.id_comerciante
      LEFT JOIN direcciones_comercios AS dco ON dco.comercio_id_comercio = co.id_comercio
      LEFT JOIN direcciones_comerciantes AS dce ON dce.id_comerciante = ce.id_comerciante
      INNER JOIN telefonos AS tel ON tel.id_comerciante = ce.id_comerciante
    WHERE
      ce.id_comerciante = $1
      GROUP BY
      co.id_comercio, ce.id_comerciante, dco.id_direccion_comercio, dce.id_direccion;
    `,
      [folio]
    );

    res.status(200).json({ data: data.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getComercianteAndcomercioInfo,
};
