const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const CarsShowrooms = sequelize.define('cars_showrooms', {
  car_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'cars',
      key: 'id'
    }
  },
  showroom_id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'showrooms',
      key: 'id'
    }
  },
  price_in_showroom: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'cars_showrooms',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "cars_showrooms_pkey",
      unique: true,
      fields: [
        { name: "car_id" },
        { name: "showroom_id" },
      ]
    },
  ]
});

module.exports = { CarsShowrooms }