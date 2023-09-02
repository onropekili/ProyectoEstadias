const { pool } = require("../../db");
const { param } = require("../../routes/routes");

const databaseInstance = pool;

const getDashboardInformation = async (req, res) => {
  try {
    commercesInformation = await databaseInstance.query(
      "select * from dashboard limit 9"
    );

    res.status(200).json({ comercers: commercesInformation });
  } catch (error) {
    res.status(500).json({ message: "Fatal internal error" });
  }
};

const findByNameOrId = async (req, res) => {
  let limitedConsult;
  let resultOfConsult;
  let filters = req.query ? req.query : {};
  try {
    if (Object.keys(filters).length !== 0) {
      let parametersArray = {};

      let limitedConsult =
        getConsult(filters, parametersArray) +
        " and cancelaciones_bajas = false order by fecha_alta desc limit 12";
      resultOfConsult = await queryToDatabaseWithFilters(
        limitedConsult,
        parametersArray
      );
    } else {
      limitedConsult =
        "select * from dashboard where 1=1 and cancelaciones_bajas = false order by fecha_alta desc limit 12";
      resultOfConsult = await queryToDatabaseWithOutFilters(limitedConsult);
    }
    res
      .status(200)
      .json({ message: "Busqueda exitosa", result: resultOfConsult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

function getConsult(filters, parametersArray) {
  let consult = isNameOrId(filters, parametersArray);

  consult += consultWithFilters(filters);

  consult += getOptions(filters);

  return consult;
}

function isNameOrId(filters, parametersArray) {
  if (filters.isNameOrId !== "") {
    parametersArray.nameOrId = filters.isNameOrId;
    if (!isNaN(filters.isNameOrId)) {
      return "select * from dashboard where id_comercio = $1";
    } else {
      //*This establishes the ilike format for the string
      parametersArray.nameOrId = "%" + parametersArray.nameOrId + "%";
      return "select * from dashboard where unaccent(nombre_completo)  ilike unaccent($1)";
    }
  } else {
    return "select * from dashboard where 1=1 ";
  }
}

function consultWithFilters(filters) {
  let aditionalConsult = "";
  if (filters.mostrar === "permanentes") {
    aditionalConsult = aditionalConsult + " and tipo_permiso = 'PERMANENTE'";
  } else if (filters.mostrar === "eventuales") {
    aditionalConsult = aditionalConsult + " and tipo_permiso = 'EVENTUAL'";
  }
  return aditionalConsult;
}
function getOptions(filters) {
  let aditionalConsult = "";
  if (filters.filtrarPor === "terceraEdad") {
    aditionalConsult += " and tercera_edad = true";
  } else if (filters.filtrarPor === "refrendados") {
    aditionalConsult += " and fecha_termino >= current_date";
  } else if (filters.filtrarPor === "noRefrendados") {
    aditionalConsult += "and fecha_termino < current_date";
  } else if (filters.filtrarPor === "conObservacion") {
    aditionalConsult +=
      " and observaciones_comerciante != '' or observaciones_comercio != ''";
  }

  return aditionalConsult;
}

const queryToDatabaseWithFilters = async (limitedConsult, parametersArray) => {
  if (Object.keys(parametersArray).length > 0) {
    return await databaseInstance.query(limitedConsult, [
      parametersArray.nameOrId,
    ]);
  } else {
    return await databaseInstance.query(limitedConsult);
  }
};

const queryToDatabaseWithOutFilters = async (limitedConsult) => {
  return await databaseInstance.query(limitedConsult);
};

module.exports = {
  getDashboardInformation,
  findByNameOrId,
};
