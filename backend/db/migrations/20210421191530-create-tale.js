'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      userId: {
        allowNull: false,
        references: { model: 'Users' },
        type: Sequelize.INTEGER
      },
      beginning: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      middle: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      end: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      briefDesc: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      taleSpine: {
        type: Sequelize.TEXT
      },
      taleType: {
        type: Sequelize.STRING(100),
      },
      purpose: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      listChar: {
        type: Sequelize.TEXT
      },
      theTale: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tales');
  }
};