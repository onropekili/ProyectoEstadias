const databaseInstance = require("../../db");
const { param } = require("../../routes/routes");

const getCostumer = async (req, res) => {
  const id_comerciante = req.query.id_comerciante;
  let parametros = {};
  parametros.id_comerciante = id_comerciante
  
  try {
    const query = "SELECT comerciantes.*, comercios.* FROM comerciantes LEFT JOIN comercios ON comerciantes.id_comerciante = comercios.comerciante_id_comerciante WHERE comerciantes.id_comerciante = $1";
    const result = await databaseInstance.query(query, [parametros.id_comerciante]);

    if (result.length === 0) {
      res.status(404).json({ message: "Persona no encontrada" });
    } else {
      const comerciantes = result.rows;
      res.status(200).json({ comerciantes });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


//EDITAR


//ELIMINAR


module.exports = {
  getCostumer
};