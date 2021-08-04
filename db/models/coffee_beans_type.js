const {Model} = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  class CoffeeBeansType extends Model {
  }

  CoffeeBeansType.init({
    id: {
      type: Sequelize.STRING(30),
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING(500),
      allowNull: false,
    },
  }, {
    sequelize: sequelize,
    tableName: 'coffee_beans_types',
    underscored: true,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
  });

  return CoffeeBeansType;
};
