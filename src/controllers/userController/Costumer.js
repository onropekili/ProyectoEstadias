const {pool} = require("../../db");
const { param } = require("../../routes/routes");

const getCostumer = async (req, res) => {
  const id_comerciante = req.query.id_comerciante;
  let parametros = {};
  parametros.id_comerciante = id_comerciante;

  try {
    const query =
      "SELECT comerciantes.*, comercios.* FROM comerciantes LEFT JOIN comercios ON comerciantes.id_comerciante = comercios.comerciante_id_comerciante WHERE comerciantes.id_comerciante = $1";
    const result = await pool.query(query, [
      parametros.id_comerciante,
    ]);

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

const editCostumer = async (req, res) => {
  const { comercio, comerciante } = req.body;
  console.log('comercio:',comercio, 'comerciante:',comerciante);
  try {
    // 2. Actualizar el comerciante
    await updateCostumer(comerciante);

    await updateAdressCostumer(comerciante);

    await updateTelefonoCostumer(comerciante);

    // 5. Actualizar el comercio
    await updateComercio(comercio);

    await updateAdressComercio(comercio);

    res
      .status(200)
      .json({ message: "Comerciante y comercio actualizados exitosamente" });
  } catch (error) {
    // 8. Send an error if something goes wrong
    res.status(500).json({ error: error.message });
  }
};

// Función para eliminar al comerciante
const deleteCostumer = async (req, res) => {
  const { id_comerciante } = req.body;

  try {
    const comercioAsociado = await checkComercioAsociado(id_comerciante);

    if (comercioAsociado) {
      res.status(400).json({
        message:
          "No se puede eliminar el comerciante mientras tenga un comercio asociado",
      });
      return;
    }

    await dropCostumer(id_comerciante);

    res.status(200).json({ message: "Comerciante eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteComercio = async (req, res) => {
  const { comerciante_id_comerciante } = req.body;

  try {
    await dropComercio(comerciante_id_comerciante);

    res.status(200).json({ message: "Comercio eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Función para actualizar los datos del comerciante
const updateCostumer = async (comerciante) => {
  const {
    id_comerciante,
    // Datos personales
    apellido_paterno,
    apellido_materno,
    nombres,
    observaciones_comerciante,
    tercera_edad,
  } = comerciante;
  const updateCostumerQuery =
    "UPDATE comerciantes SET apellido_paterno = $1, apellido_materno = $2, nombres = $3, observaciones_comerciante = $4, tercera_edad =$5 WHERE id_comerciante = $6";
  await pool.query(updateCostumerQuery, [
    apellido_paterno,
    apellido_materno,
    nombres,
    observaciones_comerciante,
    tercera_edad,
    id_comerciante,
  ]);
};

const updateAdressCostumer = async (comerciante) => {
  const {
    id_comerciante,
    colonia,
    calle,
    numero_exterior,
    numero_interior,
    codigo_postal,
    municipio,
  } = comerciante;
  const updateAdressCostumerQuery =
    "UPDATE direcciones_comerciantes SET colonia = $1, calle = $2, numero_exterior = $3, numero_interior = $4, codigo_postal = $5, municipio = $6 WHERE id_comerciante = $7";
  await pool.query(updateAdressCostumerQuery, [
    colonia,
    calle,
    numero_exterior,
    numero_interior,
    codigo_postal,
    municipio,
    id_comerciante,
  ]);
};

const updateTelefonoCostumer = async (comerciante) => {
  const { id_comerciante, telefonos } = comerciante;
  for (const telefono of telefonos) {
    await foreachTelefonos(id_comerciante, telefono);
  }
};

const foreachTelefonos = async (id_comerciante, telefono) => {
  const telefonoQuery =
    "UPDATE telefonos SET numero_telefonico = $1 WHERE id_comerciante = $2 AND id_telefon = $3";
  await pool.query(telefonoQuery, [
    telefono.numero_telefonico,
    telefono.id_comerciante,
    telefono.id_telefon,
  ]);
};

const updateComercio = async (comercio) => {
  const {
    comerciante_id_comerciante,
    fecha_inicio,
    fecha_termino,
    fecha_alta,
    giro,
    metraje,
    horario,
    cancelaciones_bajas,
    observaciones_comercio,
    tipo_comercio_id_tipo_comercio,
    tipo_permiso,
    dias_trabajados,
  } = comercio;
  const updateComercioQuery =
    "UPDATE comercios SET fecha_inicio = $1, fecha_termino = $2, fecha_alta = $3, giro = $4, metraje = $5, horario = $6, cancelaciones_bajas = $7, observaciones_comercio = $8, tipo_comercio_id_tipo_comercio = $9, tipo_permiso = $10, dias_trabajados = $11 WHERE comerciante_id_comerciante = $12";
  await pool.query(updateComercioQuery, [
    fecha_inicio,
    fecha_termino,
    fecha_alta,
    giro,
    metraje,
    horario,
    cancelaciones_bajas,
    observaciones_comercio,
    tipo_comercio_id_tipo_comercio,
    tipo_permiso,
    dias_trabajados,
    comerciante_id_comerciante,
  ]);
};

const updateAdressComercio = async (comercio) => {
  const {
    zona,
    calle,
    calle_colindante_uno,
    calle_colindante_dos,
    colonia,
    id_comercio,
  } = comercio;
  const updateAdressComercioQuery =
    "UPDATE direcciones_comercios SET zona = $1, calle = $2, calle_colindante_uno = $3, calle_colindante_dos = $4, colonia = $5 WHERE comercio_id_comercio = $6";
  await pool.query(updateAdressComercioQuery, [
    zona,
    calle,
    calle_colindante_uno,
    calle_colindante_dos,
    colonia,
    id_comercio,
  ]);
};

// Función para verificar si el comerciante tiene un comercio asociado
const checkComercioAsociado = async (id_comerciante) => {
  const checkComercioQuery =
    "SELECT * FROM comercios WHERE comerciante_id_comerciante = $1";
  const comercioResult = await pool.query(checkComercioQuery, [
    id_comerciante,
  ]);
  return comercioResult.rowCount > 0;
};

const dropComercio = async (comerciante_id_comerciante) => {
  const deleteComercioQuery =
    "DELETE FROM comercios WHERE comerciante_id_comerciante = $1";
  await pool.query(deleteComercioQuery, [
    comerciante_id_comerciante,
  ]);
};

// Función para eliminar al comerciante
const dropCostumer = async (id_comerciante) => {
  const deleteCostumerQuery =
    "DELETE FROM comerciantes WHERE id_comerciante = $1";
  await pool.query(deleteCostumerQuery, [id_comerciante]);
};

module.exports = {
  getCostumer,
  editCostumer,
  deleteCostumer,
  deleteComercio,
};
