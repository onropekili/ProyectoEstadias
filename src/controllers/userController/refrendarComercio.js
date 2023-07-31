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
    const message = await checkConcepto(ordenDePago);

  return res.status(200).send(message);
  } catch (error) {
    console.log(error);
    res.status(500).send(error );
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
  console.log(ordenDePago);
  if (ordenDePago.op_concepto === 32) {
    console.log("cedula");
    message = await ordenDePagoCedula(ordenDePago);
  } else if (ordenDePago.unidad === 2) {
    console.log("uso de piso");
    message = await ordenDePagoUsoDePiso(ordenDePago);
  } else {
    console.log("otros");
    message = await ordenDePagoOtros(ordenDePago)
  }
  return message;
}

const ordenDePagoCedula = async (ordenDePago) => {
  ExternBD.connect(mssqlConfig);
  const queryToExternDB = `SELECT TOP 1 * FROM UD_ORDEN_PAGO_ENC WHERE IDENTIFICADOR = ${ordenDePago.referencia};`
  const rawResult = await ExternBD.query(queryToExternDB);
  const result = rawResult.recordset;
  if (result.length === 0) {
    throw new Error("No se encontró la orden de pago");
  }
  const externPaymentOrder = result[0];

  console.log(externPaymentOrder);
  if (externPaymentOrder.CONCLUIDO !== 'T') {
    throw new Error("La orden de pago no ha sido pagada");
  }

  // setPaymentOrderToPaid(ordenDePago.referencia);

  return "Se puede imprimir la cédula";
}

const ordenDePagoUsoDePiso = async (ordenDePago) => {
  const queryToExternDB = `SELECT TOP 1 * FROM UD_ORDEN_PAGO_ENC WHERE IDENTIFICADOR = ${ordenDePago.referencia};`
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
  const query = `UPDATE ordenes_pago set pagado = true where referencia = $1`;
  await pool.query(query, [referencia]);
}

module.exports = { refrendar };
