const databaseInstance = require("../db");

const getShops = async (req, res) => {
  const commerceOwnersRaw = await databaseInstance.query(
    `select * from  comercios inner join comerciantes on comerciante_id_comerciante = id_comerciante limit 10;`
  );

  const hasTenCommerceOwners = setTenCommerceOwners(commerceOwnersRaw);

  res.send(hasTenCommerceOwners);
};

function setTenCommerceOwners(commerceOwnersRaw) {
  let FormatedCommerceOwners = commerceOwnersRaw.rows;
  const minNumberOfRows = 1;

  if (FormatedCommerceOwners.length < minNumberOfRows) {
    FormatedCommerceOwners = "there's no commerces registrated";
  }

  return FormatedCommerceOwners;
}

module.exports = {
  getShops,
};
