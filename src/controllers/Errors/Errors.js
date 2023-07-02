class databaseInstanceError extends(Error) {
  constructor(message) { 
    super(message);
    this.name = 'DatabaseError'
  }
}

module.exports = {
  databaseInstanceError
}