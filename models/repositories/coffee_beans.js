const DB = require('../../db/models/index');

class CoffeeBeansRepo {
  async getType(typeId) {
    return DB['CoffeeBeansType'].findByPk(typeId);
  }
}

module.exports = CoffeeBeansRepo;
