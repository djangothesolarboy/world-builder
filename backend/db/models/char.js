'use strict';
module.exports = (sequelize, DataTypes) => {
  const Char = sequelize.define('Char', {
    name:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio:{ 
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
    },
    personality:{ 
      type: DataTypes.TEXT,
    },
    motivation:{ 
      type: DataTypes.TEXT,
    },
    age:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    height:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    bodyType:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    hairColor:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    posture:{ 
      type: DataTypes.STRING,
    },
    facialHair:{ 
      type: DataTypes.STRING,
    },
    eyes:{ 
      type: DataTypes.STRING,
    },
    race:{ 
      type: DataTypes.STRING,
      allowNull: false,
    },
    behavior:{ 
      type: DataTypes.TEXT,
    },
    dailyLife:{ 
      type: DataTypes.TEXT,
    },
    quirks:{ 
      type: DataTypes.TEXT,
    },
    fatalFlaw:{ 
      type: DataTypes.TEXT,
    },
    talents:{ 
      type: DataTypes.TEXT,
    },
    skills:{ 
      type: DataTypes.TEXT,
    },
    occupation:{ 
      type: DataTypes.STRING,
    },
    hobbies:{ 
      type: DataTypes.TEXT,
    },
    wounds:{ 
      type: DataTypes.TEXT,
    },
    fearOne:{ 
      type: DataTypes.TEXT,
    },
    fearTwo:{ 
      type: DataTypes.TEXT,
    },
    fearThree:{ 
      type: DataTypes.TEXT,
    },
    fearFour:{ 
      type: DataTypes.TEXT,
    },
    fearFive:{ 
      type: DataTypes.TEXT,
    },
    fearSix:{ 
      type: DataTypes.TEXT,
    },
    positiveTraits:{ 
      type: DataTypes.TEXT,
    },
    negativeTraits:{ 
      type: DataTypes.TEXT,
    },
    idle:{ 
      type: DataTypes.TEXT,
    },
    stressed:{ 
      type: DataTypes.TEXT,
    },
    exhausted:{ 
      type: DataTypes.TEXT,
    },
    inebriated:{ 
      type: DataTypes.TEXT,
    },
    anxious:{ 
      type: DataTypes.TEXT,
    },
    distracted:{ 
      type: DataTypes.TEXT,
    },
    attraction:{ 
      type: DataTypes.TEXT,
    },
    aroused:{ 
      type: DataTypes.TEXT,
    },
    anger:{ 
      type: DataTypes.TEXT,
    },
    provoke:{ 
      type: DataTypes.TEXT,
    },
    overreact:{ 
      type: DataTypes.TEXT,
    },
    denial:{ 
      type: DataTypes.TEXT,
    },
    negCoping:{ 
      type: DataTypes.TEXT,
    },
    posCoping:{ 
      type: DataTypes.TEXT,
    },
    outerMot:{ 
      type: DataTypes.TEXT,
    },
    innerMotGen:{ 
      type: DataTypes.TEXT,
    },
    innerMotSpec:{ 
      type: DataTypes.TEXT,
    }
  }, {});
  Char.associate = function(models) {
    Char.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Char;
};