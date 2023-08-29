const {pool} = require("../../../db");




const checkIfCommerceIsAvailableToLeave = async (req, res)  => {
    const {id_comercio} = req.query;
    console.log(id_comercio)

    try {
        const rawFecha = await getFechas(id_comercio);
        if (rawFecha.rowCount === 0) {
            return res.status(404).json({message: "El comercio no existe"});
        }

        const {fechaTermino, fechaInicio, fechaActual} = formatFechas(rawFecha);

        if (fechaTermino < fechaActual) {
            return res.status(400).json({message: "El comercio no tiene refrendo"});
        }
        const folio = await getFolio(id_comercio, fechaInicio, fechaTermino);

        if (!folio) {
            return res.status(400).json({message: "El comercio tiene refrendo pero no cedula"});
        }


        return res.status(200).json({message: "El comercio puede darse de baja"});

    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error.message});
    }

}

async function getInfoToSend({id_comercio}) {
    const queryInfoFormatoBaja = `SELECT UPPER(CONCAT(ce.nombres, ' ', ce.apellido_paterno, ' ', ce.apellido_materno)) as nombre,
       UPPER(co.giro) as giro,
       UPPER(concat(dco.calle, ' entre ', dco.calle_colindante_uno , ' y ', dco.calle_colindante_dos)) as domicilio,
       UPPER(colonia)
        FROM comercios as co
        INNER JOIN comerciantes ce ON ce.id_comerciante = co.comerciante_id_comerciante 
        INNER JOIN direcciones_comercios dco ON dco.comercio_id_comercio = co.id_comercio
        WHERE id_comercio = $1;

        `;
    const rawInfoFormatoBaja = await pool.query(queryInfoFormatoBaja, [id_comercio]);
    const infoFormatoBaja = rawInfoFormatoBaja.rows[0];
    return infoFormatoBaja;
}

async function getFolio(id_comercio, fechaInicio, fechaTermino) {
    const queryGetFolio = `SELECT folio from cedula where id_comercio = $1 and refrendo_fecha_inicio = $2 and refrendo_fecha_fin = $3 limit 1`;
    const rawFolio = await pool.query(queryGetFolio, [id_comercio, fechaInicio, fechaTermino]);
    const folio = rawFolio && rawFolio.rows.length > 0 ? rawFolio.rows[0].folio : null;
    return folio;
}

async function getFechas(id_comercio) {
    const query = `SELECT co.fecha_termino, fecha_inicio, current_date as fecha_actual from comercios as co where co.id_comercio = $1`
    const rawFecha = await pool.query(query, [id_comercio]);
    return rawFecha;
}

function formatFechas(rawFecha) {
    const fechaTermino = rawFecha.rows[0].fecha_termino;
    const fechaInicio = rawFecha.rows[0].fecha_inicio;
    const fechaActual = rawFecha.rows[0].fecha_actual;
    return {fechaTermino, fechaInicio, fechaActual};
} 

const getFormatoBajaInfo = async (req, res) => {
    const {id_comercio} = req.query;
    const infoToSend = await getInfoToSend({id_comercio});

    const rawFecha = await getFechas(id_comercio);
    const {fechaTermino, fechaInicio, fechaActual} = formatFechas(rawFecha);
    const folio = await getFolio(id_comercio, fechaInicio, fechaTermino);
    infoToSend.folio = folio;

    res.status(200).json(infoToSend);
}
module.exports = {checkIfCommerceIsAvailableToLeave, getFormatoBajaInfo};