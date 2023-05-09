const getCommerceOwnerInfo = (req, res) => {
  const CommerceOwnerId = req.params.id;


res.send(`this is the information of this merchant ${CommerceOwnerId}`)
}

module.exports = {
  getCommerceOwnerInfo,
}