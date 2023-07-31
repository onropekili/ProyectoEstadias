const { pool } = require("../../db");
const getInfoOrdenPago = async (req, res) => {
  const referencia = req.query.ref; 
  console.log(referencia);
 try {
   // Query to get all the data needed for a specific payment order
   const query = `SELECT CONCAT(ce.nombres, ' ', ce.apellido_paterno, ' ', ce.apellido_materno) AS nombre_completo,
    CONCAT(dce.calle, ' ', dce.numero_exterior, ' ', dce.colonia, ' ', dce.municipio) AS direccion_comerciante,
    op.*,
    cp.*,
    (SELECT tipo FROM tipo_comercio WHERE id_tipo_comercio = co.tipo_comercio_id_tipo_comercio) AS tipo_comercio,
    co.giro,
    co.metraje,
    co.horario,
    current_date as fecha_actual,
    CONCAT(dco.calle, ' ENTRE ', dco.calle_colindante_uno, ' Y ', dco.calle_colindante_dos) AS direccion_comercio,
    dco.colonia,
	  co.id_comercio,
    nt.numero_telefonico
    FROM
    comerciantes AS ce
    INNER JOIN comercios AS co ON ce.id_comerciante = co.comerciante_id_comerciante
    INNER JOIN direcciones_comerciantes AS dce ON ce.id_comerciante = dce.id_comerciante
    INNER JOIN direcciones_comercios AS dco ON co.id_comercio = dco.comercio_id_comercio
    INNER JOIN ordenes_pago AS op ON op.idcomercio = co.id_comercio
    INNER JOIN conceptos_pago AS cp ON op.concepto = cp.idconcepto
    INNER JOIN telefonos as nt ON nt.id_comerciante = ce.id_comerciante
    WHERE referencia = $1`;
   const result = await pool.query(query, [referencia]);
   const data = result.rows[0];
   res.status(200).json({data : data});
 } catch (error) {
  res.status(500).json({ error: error });
  console.log(error);
 }
};

module.exports = { getInfoOrdenPago };

