'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hero.hasOne(models.type, {
        as: "type",
        foreignKey: {
          name: "idType",
        },
      });
    }
  }
  hero.init({
    name: DataTypes.STRING,
    idType: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hero',
  });
  return hero;
};