const { Purchases } = require('../models/purchases')
const ApiError = require('../error/ApiError');

class PurchasesController {
    async getAllPurchases(req, res) {
        const purchasess = await Purchases.findAll()
        return res.json(purchasess)
    }

    async getPurchaseById(req, res) {
        const {id} = req.params
        const purchases = await Purchases.findOne({where: {id}})
        return res.json(purchases)
    }

    async addPurchase(req, res, next) {
        try {
            const purchases = await Purchases.create(req.body)
            return res.json(purchases)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deletePurchases(req, res, next) {
        try {
            const {id} = req.params
            await Purchasess.destroy({
                where: {id}
            })
            const purchases = await Purchases.findAll()
            return res.json(purchases)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new PurchasesController()