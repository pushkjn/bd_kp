const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Showrooms = sequelize.define('showrooms', {
  id: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  address: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  rating: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  website: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  phone_number: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'showrooms',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "showrooms_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = { Showrooms }