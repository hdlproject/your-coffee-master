'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('coffee_beans_types', {
      id: {
        type: Sequelize.DataTypes.STRING(30),
        primaryKey: true,
      },
      description: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coffee_beans_types');
  },
};
