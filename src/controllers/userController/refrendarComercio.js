const ExternBD = require("mssql");
const { pool, mssqlConfig } = require("../../db");


const refrendar = async (req, res) => {
  try {
    const { numeroReferencia } = req.query;
    const query = `
    SELECT op.*, cp.*, op.concepto as op_concepto from ordenes_pago as op inner join conceptos_pago as cp on op.concepto = cp.idconcepto where op.referencia= $1
    `;
    const allPayOrders = await pool.query(query, [numeroReferencia]);

    checkIfRefIsValid(allPayOrders)
    const ordenDePago = allPayOrders.rows[0];
    let message = await checkConcepto(ordenDePago);
    message = message.toString()
    return res.status(200).send(message);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const checkIfRefIsValid = (result) => {

  if (result.rows.length === 0) {
    throw new Error("No se encontró la orden de pago");
  }
  if (result.rows[0].pagado) {
    throw new Error("La orden de pago ya ha sido utilizada");
  }
};

const checkConcepto = async (ordenDePago) => {
  let message = "";
  if (ordenDePago.op_concepto === 32) {
    message = await ordenDePagoCedula(ordenDePago);
  } else if (ordenDePago.unidad === 2) {
    message = await ordenDePagoUsoDePiso(ordenDePago);
  } else {
    message = await ordenDePagoOtros(ordenDePago)
  }
  return message;
}

const ordenDePagoCedula = async (ordenDePago) => {
  await ExternBD.connect(mssqlConfig);
  const queryToExternDB = `SELECT TOP 1 * FROM UD_ORDEN_PAGO_ENC WHERE IDENTIFICADOR = '${ordenDePago.referencia}';`
  const rawResult = await ExternBD.query(queryToExternDB);
  const result = rawResult.recordset;
  if (result.length === 0) {
    throw new Error("No se encontró la orden de pago");
  }
  const externPaymentOrder = result[0];
  if (externPaymentOrder.CONCLUIDO !== 'T') {
    throw new Error("Esta orden no ha sido pagada");
  }

  await checkIfComercioHasRefrendo(ordenDePago);


  await setPaymentOrderToPaid(ordenDePago.referencia);

  await createNewCedula(ordenDePago)

  const folio = await getFolio();
  return folio;
}

const checkIfComercioHasRefrendo = async (ordenDePago) => {
  const query = `SELECT fecha_termino, current_date as fecha_actual FROM comercios WHERE id_comercio = $1`;
  const rawComercioRefrendado = await pool.query(query, [ordenDePago.idcomercio]);
  const comercioRefrendado = rawComercioRefrendado.rows[0];
  if (comercioRefrendado.fecha_termino < comercioRefrendado.fecha_actual) {
    throw new Error("El comercio no ha sido refrendado");
  }
}

const ordenDePagoUsoDePiso = async (ordenDePago) => {
  await ExternBD.connect(mssqlConfig);
  const queryToExternDB = `SELECT TOP 1 * FROM UD_ORDEN_PAGO_ENC WHERE IDENTIFICADOR = '${ordenDePago.referencia}';`
  const rawResult = await ExternBD.query(queryToExternDB);
  const result = rawResult.recordset;
  if (result.length === 0) {
    throw new Error("No se encontró la orden de pago");
  }
  const externPaymentOrder = result[0];
  const pagoConcluido = externPaymentOrder.CONCLUIDO === 'T';
  if (!pagoConcluido) {
    throw new Error("La orden de pago no ha sido pagada");
  }
  refrendarComercio(ordenDePago);
  setPaymentOrderToPaid(ordenDePago.referencia);
  return "Comerciante refrendado";
}

const refrendarComercio = async (ordenDePago) => {
  const updateComerciante = `UPDATE comercios SET fecha_inicio = $1, fecha_termino = $2, dias_trabajados = $3 WHERE id_comercio = $4`;
  await pool.query(updateComerciante, [ordenDePago.fecha_inicio, ordenDePago.fecha_final, ordenDePago.dias, ordenDePago.idcomercio]);
}

const ordenDePagoOtros = async (ordenDePago) => {
  await setPaymentOrderToPaid(ordenDePago.referencia);
  return "Orden de pago pagada";
}

const setPaymentOrderToPaid = async (referencia) => {
  const query = `UPDATE ordenes_pago set pagado = true where referencia = $1;`;
  await pool.query(query, [referencia]);
}

const createNewCedula = async (ordenDePago) => {
  const queryToComercio = `SELECT * FROM comercios WHERE id_comercio = $1`;
  const comercio = await pool.query(queryToComercio, [ordenDePago.idcomercio]);
  const comercioData = comercio.rows[0];
  const query = `INSERT INTO cedula (id_comercio, fecha_expedicion, refrendo_fecha_inicio, refrendo_fecha_fin) VALUES ($1, current_date, $2, $3);`;
  const result = await pool.query(query, [ordenDePago.idcomercio, comercioData.fecha_inicio, comercioData.fecha_termino]);
}

const getFolio = async () => {
  const query = `SELECT * FROM cedula ORDER BY folio DESC LIMIT 1`;
  const folio = await pool.query(query);
  return folio.rows[0].folio;
}

module.exports = { refrendar };
