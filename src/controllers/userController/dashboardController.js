const databaseInstance = require("../../db");
const { param } = require("../../routes/routes");

const getDashboardInformation = async (req, res) => {
  try {
    commercesInformation = await databaseInstance.query(
      "select * from dashboard limit 10"
    );

    res.status(200).json({ comercers: commercesInformation });
  } catch (error) {
    res.status(500).json({ message: "Fatal internal error" });
  }
};

const findByNameOrId = async (req, res) => {
  let filters = req.query;
  let parametersArray = {};
  filters = evalIfIsNotUndefined(filters);
  try {
    let unlimitedConsult = getConsult(filters, parametersArray);
    const limitedConsult = unlimitedConsult + " limit 10";
    const resultOfConsult = await queryToDatabase(
      limitedConsult,
      parametersArray
    );

    res
      .status(200)
      .json({ message: "Busqueda exitosa", result: resultOfConsult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

function evalIfIsNotUndefined(filters) {
  if (filters !== undefined) {
  } else {
    filters = {};
  }
  return filters;
}

function getConsult(filters, parametersArray) {
  let consult = isNameOrId(filters, parametersArray);

  consult += consultWithFilters(filters);

  consult += withOptionsConsult(filters);

  return consult;
}

function isNameOrId(filters, parametersArray) {
  if (filters.isNameOrId !== undefined) {
    parametersArray.nameOrId = filters.isNameOrId;
    if (!isNaN(filters.isNameOrId)) {
      return "select * from dashboard where id_comerciante = $1";
    } else {
      //*This establish the ilike format for the string
      parametersArray.nameOrId = "%" + parametersArray.nameOrId + "%";
      return "select * from dashboard where unaccent(nombre_completo)  ilike unaccent($1)";
    }
  } else {
    return "select * from dashboard where 1=1";
  }
}

function consultWithFilters(filters) {
  let consult = "";
  if (filters.show !== undefined) {
    if (filters.permanentes !== undefined) {
      consult = consult + " and tipo_permiso = 'PERMANENTE'";
    } else if (filters.eventual) {
      consult = consult + " and tipo_permiso = 'EVENTUAL'";
    }
  } else {
    return consult;
  }
  return consult;
}
function withOptionsConsult(filters) {
  let consult = "";
  if (filters.filtrarPor !== undefined) {
    if (filters.terceraEdad !== undefined) {
      consult += " and tercera edad = true";
    } else if (filters.refrendados !== undefined) {
      consult += " and fecha_termino >= current_date";
    } else if (filters.noRefrendados !== undefined) {
      consult += "and fecha_termino < current_date";
    } else if (filters.conObservaciones !== undefined) {
      consult +=
        " and observaciones_comerciante != '' or observaciones_comercio != ''";
    }
  } else {
    return consult;
  }

  return consult;
}

const queryToDatabase = async (limitedConsult, parametersArray) => {
  console.log(limitedConsult, parametersArray.nameOrId);
  if (parametersArray.nameOrId !== undefined) {
    return await databaseInstance.query(limitedConsult, [
      parametersArray.nameOrId,
    ]);
  } else {
    return await databaseInstance.query(limitedConsult);
  }
};

module.exports = {
  getDashboardInformation,
  findByNameOrId,
};
