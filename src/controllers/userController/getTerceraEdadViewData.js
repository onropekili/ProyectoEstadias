const {pool} = require('../../db')
const getTerceraEdadViewData = async (req, res) => {
  try {
    const { id_comerciante } = req.query;

    const query = `
      SELECT
        CONCAT(comerciantes.nombres, ' ', comerciantes.apellido_paterno, ' ', comerciantes.apellido_materno) as nombre_completo,
        CONCAT(dc.calle, ', ', dc.colonia) as direccion,
        CONCAT(dc.calle_colindante_uno, ' y ', dc.calle_colindante_dos) as cruces,
        dc.colonia,
        comercios.giro,
        comercios.horario,
        comercios.metraje,
        comercios.fecha_termino
      FROM comerciantes
      INNER JOIN comercios ON comerciantes.id_comerciante = comercios.comerciante_id_comerciante
      INNER JOIN direcciones_comercios as dc ON comercios.id_comercio = dc.comercio_id_comercio
      WHERE comerciantes.id_comerciante = $1
    `;
    const resultOfQuery = await pool.query(query, [id_comerciante]);
    
    res.status(200).json(resultOfQuery.rows[0]);
  } catch (error) {
    console.error("Error al obtener datos de comerciantes:", error);
    res.status(500).json({ error: "Error al obtener datos de comerciantes" });
  }
};

module.exports = {
  getTerceraEdadViewData
}