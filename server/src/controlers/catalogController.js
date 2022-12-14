const {Catalog} = require("../models/catalog");
const ApiError = require('../error/ApiError');

class CatalogController {
    async getAllCatalogs(req, res) {
        const catalogs = await Catalog.findAll()
        return res.json(catalogs)
    }

    async getCatalogById(req, res) {
        const {id} = req.params
        const item = await Catalog.findOne({where: {id}})
        return res.json(item)
    }

    async addCatalog(req, res, next) {
        try {
            const item = await Catalog.create(req.body)
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteCatalog(req, res, next) {
        try {
            const {id} = req.params
            await Catalog.destroy({
                where: {id}
            })
            const catalogs = await Catalog.findAll()
            return res.json(catalogs)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new CatalogController()