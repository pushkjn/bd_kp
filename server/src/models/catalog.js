const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Catalog = sequelize.define('catalog', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  car_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'cars',
      key: 'id'
    }
  },
  showroom_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'showrooms',
      key: 'id'
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  colour: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  transmission: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  release_year: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  is_sold: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'catalog',
  schema: 'public',
  hasTrigger: true,
  timestamps: false,
  indexes: [
    {
      name: "catalog_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = { Catalog }
