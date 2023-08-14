const { pool } = require("../../db");
const getCedulaData = async (req, res) => {
  try {
    const { folio } = req.query;
    console.log(folio);
    const query = `SELECT 
      concat(ce.nombres, ' ', ce.apellido_paterno, ' ', ce.apellido_materno) as nombre_completo,
      (select tipo from tipo_comercio where id_tipo_comercio = co.tipo_comercio_id_tipo_comercio) as tipo_comercio,
      co.fecha_termino,
      ca.folio,
      co.giro,
      (select tipo_permiso from tipo_de_permiso where id_tipo_permiso = co.tipo_permiso) as tipo_permiso,
      concat(dco.calle, ' entre ', dco.calle_colindante_uno, ' y ', dco.calle_colindante_dos) as direccion_comercio,
      dco.zona, 
      co.metraje,
      co.horario,
      co.observaciones_comercio,
      ca.fecha_expedicion
      FROM cedula as ca
      INNER JOIN comercios as co ON ca.id_comercio = co.id_comercio
      INNER JOIN direcciones_comercios as dco ON co.id_comercio = dco.comercio_id_comercio
      INNER JOIN comerciantes as ce ON co.comerciante_id_comerciante = ce.id_comerciante
      WHERE ca.folio = $1;`;
    const response = await pool.query(query, [folio]);
    res.status(200).json(response.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getCedulaData };
