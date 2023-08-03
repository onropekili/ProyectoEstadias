const ExternBD = require("mssql");
const { mssqlConfig, pool } = require("../../db");

// Función para contar los días de la semana entre dos fechas
const CrearNuevaOrdenDePago = async (req, res) => {
  try {
    const { conceptoOrden, MontoOrdenTotal, idComercio, fechaInicio, fechaFin, dias } = req.body;
    console.log(conceptoOrden);
    const internCreateNewPayOrder = await pool.query(
      "select crearNuevaOrdenPago($2, $3, $1)",
      [idComercio, conceptoOrden[0].concepto, MontoOrdenTotal]
    );
    const folioOrdenPago = internCreateNewPayOrder.rows[0].crearnuevaordenpago;
    const stringDays = dias.join()

    if(conceptoOrden.unidad !== 'PESOS'){
      pool.query(
        `update ordenes_pago set fecha_inicio = $1, fecha_final = $2, dias = $3 where folio = $4`,
        [fechaInicio, fechaFin, stringDays, folioOrdenPago]
      );
    };

    const rawReferenciaOrdenPago = await pool.query(
      `SELECT referencia from ordenes_pago where folio = $1`,
      [folioOrdenPago]
    );

    const referenciaOrdenPago = rawReferenciaOrdenPago.rows[0].referencia;


    const rawMerchantData = await pool.query(
      "SELECT  * from comerciantes inner join comercios on comerciantes.id_comerciante = comercios.comerciante_id_comerciante inner join direcciones_comerciantes on comerciantes.id_comerciante = direcciones_comerciantes.id_comerciante where comerciantes.id_comerciante = (select comerciante_id_comerciante from comercios where id_comercio = $1);",
      [idComercio]
    );

    const idConceptoOrden = conceptoOrden[0].idconcepto
    const formatedMerchantData = rawMerchantData.rows[0];
    const nombres = formatedMerchantData.nombres;
    const nombreCompleto = nombres.concat(
      " ",
      formatedMerchantData.apellido_paterno,
      " ",
      formatedMerchantData.apellido_materno
    );
    const Descripcion = conceptoOrden[0].concepto;

    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0"); // Se agrega +1 al mes ya que los meses en JavaScript son indexados desde 0
    const dia = String(fechaActual.getDate()).padStart(2, "0");

    const fechaFormateada = `${anio}-${mes}-${dia}`;
    const clave = folioOrdenPago + 1000

    await ExternBD.connect(mssqlConfig);
    const datosInsertUD_ORDEN_PAGO_ENC = {
      FOLIO_RECIBO: null,
      CONCLUIDO: "F",
      RFC: null, // Opcional
      FECHA: fechaFormateada,
      FLAG: "1",
      NUMERO: "19",
      IDENTIFICADOR: referenciaOrdenPago,
      TOTAL: MontoOrdenTotal,
      DESCRIPCION: Descripcion,
      NOMBRECOMPLETO: nombreCompleto,
      CALLE: formatedMerchantData.calle,
      NO_EXT: formatedMerchantData.numero_exterior,
      NO_INT: formatedMerchantData.numero_interior,
      COLONIA: formatedMerchantData.colonia,
      MUNICIPIO: formatedMerchantData.municipio,
      CODIGOPOSTAL: formatedMerchantData.codigo_postal,
      ESTADO: "Jalisco",
      PAIS: "México",
      CLAVE:  clave,
    };
    // Crear sentencia INSERT
    const queryUD_ORDEN_PAGO_ENC = `
        INSERT INTO UD_ORDEN_PAGO_ENC (
          ID,
          FOLIO_RECIBO,
          CONCLUIDO,
          RFC,
          FECHA,
          FLAG,
          NUMERO,
          IDENTIFICADOR,
          TOTAL,
          DESCRIPCION,
          NOMBRECOMPLETO,
          CALLE,
          NO_EXT,
          NO_INT,
          COLONIA,
          MUNICIPIO,
          CODIGOPOSTAL,
          ESTADO,
          PAIS,
          CLAVE
        )
        VALUES (
          NEWID(),
          ${
            datosInsertUD_ORDEN_PAGO_ENC.FOLIO_RECIBO
              ? `'${datosInsertUD_ORDEN_PAGO_ENC.FOLIO_RECIBO}'`
              : "NULL"
          },
          '${datosInsertUD_ORDEN_PAGO_ENC.CONCLUIDO}',
          ${
            datosInsertUD_ORDEN_PAGO_ENC.RFC
              ? `'${datosInsertUD_ORDEN_PAGO_ENC.RFC}'`
              : "NULL"
          },
          '${datosInsertUD_ORDEN_PAGO_ENC.FECHA}',
          '${datosInsertUD_ORDEN_PAGO_ENC.FLAG}',
          '${datosInsertUD_ORDEN_PAGO_ENC.NUMERO}',
          '${datosInsertUD_ORDEN_PAGO_ENC.IDENTIFICADOR}',
          ${datosInsertUD_ORDEN_PAGO_ENC.TOTAL},
          '${datosInsertUD_ORDEN_PAGO_ENC.DESCRIPCION}',
          '${datosInsertUD_ORDEN_PAGO_ENC.NOMBRECOMPLETO}',
          '${datosInsertUD_ORDEN_PAGO_ENC.CALLE}',
          '${datosInsertUD_ORDEN_PAGO_ENC.NO_EXT}',
          '${datosInsertUD_ORDEN_PAGO_ENC.NO_INT}',
          '${datosInsertUD_ORDEN_PAGO_ENC.COLONIA}',
          '${datosInsertUD_ORDEN_PAGO_ENC.MUNICIPIO}',
          '${datosInsertUD_ORDEN_PAGO_ENC.CODIGOPOSTAL}',
          '${datosInsertUD_ORDEN_PAGO_ENC.ESTADO}',
          '${datosInsertUD_ORDEN_PAGO_ENC.PAIS}',
          '${datosInsertUD_ORDEN_PAGO_ENC.CLAVE}'
        );
      `;
    const ExternNewOrderPay = await ExternBD.query(queryUD_ORDEN_PAGO_ENC);

    const queryUD_ORDEN_PAGO_DET = `
      INSERT INTO UD_ORDEN_PAGO_DET (
        ID,
        PARCIALIDAD,
        DESCRIPCION,
        CLAVE,
        PARCIALIDADTOTAL,
        IMPORTE,
        CONCEPTO
      )
      VALUES (
        NEWID(),
        ${1},
        '${conceptoOrden[0].concepto}',
        ${clave},
        ${MontoOrdenTotal},
        ${MontoOrdenTotal},
        ${conceptoOrden[0].codigo}
      );`;
    const ExternNewOrderPayDetail = await ExternBD.query(
      queryUD_ORDEN_PAGO_DET
    );

    res.status(200).json({
      referenciaOrdenPago: referenciaOrdenPago,
      idComercio: idComercio,
    });
  } catch (error) {
    console.log(error);
    console.log(error);
    res.status(500).json({ error: error });
  }
};

module.exports = {
  CrearNuevaOrdenDePago,
};
