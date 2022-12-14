const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Client = sequelize.define('client', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  surname: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  passport: {
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
  tableName: 'client',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "client_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = { Client }
