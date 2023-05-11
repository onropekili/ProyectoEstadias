const databaseInstance = require("../db");



const getCommerceOwnerInfo = async (req, res) => {
  const commerceOwnerId = req.params.id;
  let formatedCommerceInfo = ''


  const rawCommerceInfo = await databaseInstance.query(
    "select * from comercios where comerciante_id_comerciante =" +commerceOwnerId + ";"
  )


  try {
    formatedCommerceInfo = LookIfCommerceExists(rawCommerceInfo);
  } catch (error) {
    formatedCommerceInfo = 'Este comercio no existe'
  }


res.send(`this is the information of this merchant ` + formatedCommerceInfo)
}



function LookIfCommerceExists(rawCommerceInfo) {
  const commerceDoesntExist = 0

  
  if(rawCommerceInfo.rowCount === commerceDoesntExist ) {

    throw Error('This commerce Doesnt exist')

  }else {
    return rawCommerceInfo.rows
  }
}

module.exports = {
  getCommerceOwnerInfo,
}