const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Purchases = sequelize.define('purchases', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  id_client: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'client',
      key: 'id'
    }
  },
  id_catalog: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'catalog',
      key: 'id'
    }
  },
  date: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  is_rated: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'purchases',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "purchases_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = { Purchases }
