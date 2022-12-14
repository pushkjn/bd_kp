const Sequelize = require('sequelize');

const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Cars = sequelize.define('cars', {
  id: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  brand: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  model: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  assembly: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  body_style: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  power: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  acceleration: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'cars',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "cars_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = { Cars }
