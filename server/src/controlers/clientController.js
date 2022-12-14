const { Client } = require('../models/client')
const ApiError = require('../error/ApiError');

class ClientController {
    async getAllClients(req, res) {
        const cars = await Client.findAll()
        return res.json(cars)
    }

    async getClientById(req, res) {
        const {id} = req.params
        const client = await Client.findOne({where: {id}})
        return res.json(client)
    }

    async addClient(req, res, next) {
        try {
            const client = await Client.create(req.body)
            return res.json(client)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteClient(req, res, next) {
        try {
            const {id} = req.params
            await Client.destroy({
                where: {id}
            })
            const client = await Client.findAll()
            return res.json(client)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ClientController()