// Importar moment.js
const moment = require("moment");
const sqlServer = require("mssql");

const { mssqlConfig, pool } = require("../../db");

// Función para contar los días de la semana entre dos fechas
const CrearNuevaOrdenDePago = async (req, res) => {
  try {
    const { conceptoOrden, MontoOrdenTotal, fechaInicial, fechaFinal, idComercio } = req.body;

    const CreateNewPayOrder = pool.query("insert into ordenes_pago (idComercio, concepto, total) values($1, (select idConcepto from conceptos_pago where concepto = $2) ,$3)", [idComercio, conceptoOrden, MontoOrdenTotal])


    res.status(200).json({consulta : CreateNewPayOrder});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  CrearNuevaOrdenDePago,
};
