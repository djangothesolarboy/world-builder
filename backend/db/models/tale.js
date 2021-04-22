'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tale = sequelize.define('Tale', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
    beginning: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    middle: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    end: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    briefDesc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    taleSpine: {
      type: DataTypes.TEXT,
    },
    taleType: {
      type: DataTypes.STRING,
    },
    purpose: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    listChar: {
      type: DataTypes.TEXT,
    },
    theTale: {
      type: DataTypes.TEXT,
    }
  }, {});
  Tale.associate = function(models) {
    Tale.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Tale;
};