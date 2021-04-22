'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Chars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        references: { model: 'Users' },
        type: Sequelize.INTEGER,
      },
      personality: {
        type: Sequelize.TEXT
      },
      motivation: {
        type: Sequelize.TEXT
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      height: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      bodyType: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      hairColor: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      posture: {
        type: Sequelize.STRING(200)
      },
      facialHair: {
        type: Sequelize.STRING(200)
      },
      eyes: {
        type: Sequelize.STRING(200)
      },
      race: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      behavior: {
        type: Sequelize.TEXT
      },
      dailyLife: {
        type: Sequelize.TEXT
      },
      quirks: {
        type: Sequelize.TEXT
      },
      fatalFlaw: {
        type: Sequelize.TEXT
      },
      talents: {
        type: Sequelize.TEXT
      },
      skills: {
        type: Sequelize.TEXT
      },
      occupation: {
        type: Sequelize.STRING(200)
      },
      hobbies: {
        type: Sequelize.TEXT
      },
      wounds: {
        type: Sequelize.TEXT
      },
      fearOne: {
        type: Sequelize.TEXT
      },
      fearTwo: {
        type: Sequelize.TEXT
      },
      fearThree: {
        type: Sequelize.TEXT
      },
      fearFour: {
        type: Sequelize.TEXT
      },
      fearFive: {
        type: Sequelize.TEXT
      },
      fearSix: {
        type: Sequelize.TEXT
      },
      positiveTraits: {
        type: Sequelize.TEXT
      },
      negativeTraits: {
        type: Sequelize.TEXT
      },
      idle: {
        type: Sequelize.TEXT
      },
      stressed: {
        type: Sequelize.TEXT
      },
      exhausted: {
        type: Sequelize.TEXT
      },
      inebriated: {
        type: Sequelize.TEXT
      },
      anxious: {
        type: Sequelize.TEXT
      },
      distracted: {
        type: Sequelize.TEXT
      },
      attraction: {
        type: Sequelize.TEXT
      },
      aroused: {
        type: Sequelize.TEXT
      },
      anger: {
        type: Sequelize.TEXT
      },
      provoke: {
        type: Sequelize.TEXT
      },
      overreact: {
        type: Sequelize.TEXT
      },
      denial: {
        type: Sequelize.TEXT
      },
      negCoping: {
        type: Sequelize.TEXT
      },
      posCoping: {
        type: Sequelize.TEXT
      },
      outerMot: {
        type: Sequelize.TEXT
      },
      innerMotGen: {
        type: Sequelize.TEXT
      },
      innerMotSpec: {
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
    return queryInterface.dropTable('Chars');
  }
};