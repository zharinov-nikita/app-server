import DomainModel from '../models/DomainModel.js'

class DomainController {
    async update(req, res) {
        try {
            const { _id } = req.body
            const domain = await DomainModel.findByIdAndUpdate(_id, req.body, { new: true })
            return res.status(200).json(domain)
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}

export default new DomainController()