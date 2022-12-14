const {Showrooms} = require("../models/showrooms");
const ApiError = require("../error/ApiError");

class ShowroomsController {
    async getAllShowrooms(req, res) {
        const showrooms = await Showrooms.findAll()
        return res.json(showrooms)
    }

    async getShowroomById(req, res) {
        const {id} = req.params
        const item = await Showrooms.findOne({where: {id}})
        return res.json(item)
    }

    async addShowroom(req, res, next) {
        try {
            const item = await Showrooms.create(req.body)
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async deleteShowroom(req, res, next) {
        try {
            const {id} = req.params
            await Showrooms.destroy({
                where: {id}
            })
            const showroom = await Showrooms.findAll()
            return res.json(showroom)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ShowroomsController()