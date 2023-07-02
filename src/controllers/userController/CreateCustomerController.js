const databaseInstance = require("../../db");
const { databaseInstanceError } = require("../Errors/Errors");

const createNewCostumer = async (req, res) => {
  const { comerciante, comercio } = req.body;
  console.log(comerciante, comercio);
  const telefonos = [comerciante.telefono1, comerciante.telefono2];
    

  try {
    await queryToDatabase(comerciante, comercio, telefonos);
    res.status(200).json({ message: "Registo creado exitosamente" });

  } catch (error) {
    console.log(error);
    res.status(500).json({error : 'Error en el registro'})
  }
};

const queryToDatabase = async (comerciante, comercio, telefonos) => {
  await databaseInstance.query(
    "SELECT insertarNuevoComercianteYComercio($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23);",
    [
      comerciante.apellidoPaterno,
      comerciante.apellidoMaterno,
      comerciante.nombres,
      comerciante.observaciones,
      comerciante.terceraEdad,
      comerciante.colonia,
      comerciante.calle,
      comerciante.numeroExterior,
      comerciante.numeroInterior,
      comerciante.municipio,
      comerciante.np,
      comercio.zona,
      comercio.calle,
      comercio.calleColindanteUno,
      comercio.calleColindanteDos,
      comercio.colonia,
      telefonos,
      comercio.giro,
      comercio.metraje,
      comercio.horario,
      comercio.observaciones,
      comercio.tipo,
      comercio.permiso,
    ]
  );
};

const concatenarTelefonosParaQuery = (telefono1, telefono2) => {
  return "ARRAY['" + telefono1 + "','" + telefono2 + "']";
}

module.exports = {
  createNewCostumer
}
