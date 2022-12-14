var DataTypes = require("sequelize").DataTypes;
var _cars = require("./cars");
var _cars_showrooms = require("./cars_showrooms");
var _catalog = require("./catalog");
var _client = require("./client");
var _purchases = require("./purchases");
var _showrooms = require("./showrooms");

function initModels(sequelize) {
  var cars = _cars(sequelize, DataTypes);
  var cars_showrooms = _cars_showrooms(sequelize, DataTypes);
  var catalog = _catalog(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var purchases = _purchases(sequelize, DataTypes);
  var showrooms = _showrooms(sequelize, DataTypes);

  cars.belongsToMany(showrooms, { as: 'showroom_id_showrooms', through: cars_showrooms, foreignKey: "car_id", otherKey: "showroom_id" });
  showrooms.belongsToMany(cars, { as: 'car_id_cars', through: cars_showrooms, foreignKey: "showroom_id", otherKey: "car_id" });
  cars_showrooms.belongsTo(cars, { as: "car", foreignKey: "car_id"});
  cars.hasMany(cars_showrooms, { as: "cars_showrooms", foreignKey: "car_id"});
  catalog.belongsTo(cars, { as: "car", foreignKey: "car_id"});
  cars.hasMany(catalog, { as: "catalogs", foreignKey: "car_id"});
  purchases.belongsTo(catalog, { as: "id_catalog_catalog", foreignKey: "id_catalog"});
  catalog.hasMany(purchases, { as: "purchases", foreignKey: "id_catalog"});
  purchases.belongsTo(client, { as: "id_client_client", foreignKey: "id_client"});
  client.hasMany(purchases, { as: "purchases", foreignKey: "id_client"});
  cars_showrooms.belongsTo(showrooms, { as: "showroom", foreignKey: "showroom_id"});
  showrooms.hasMany(cars_showrooms, { as: "cars_showrooms", foreignKey: "showroom_id"});
  catalog.belongsTo(showrooms, { as: "showroom", foreignKey: "showroom_id"});
  showrooms.hasMany(catalog, { as: "catalogs", foreignKey: "showroom_id"});

  return {
    cars,
    cars_showrooms,
    catalog,
    client,
    purchases,
    showrooms,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
