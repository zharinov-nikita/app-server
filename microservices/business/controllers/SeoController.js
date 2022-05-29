import SeoModel from '../models/SeoModel.js'

class SeoController {
    async getOne(req, res) {
        try {
            const { _id } = req.params
            const seo = await SeoModel.findById({ _id })
            return res.status(200).json(seo)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const { _id } = req.body
            const seo = await SeoModel.findByIdAndUpdate(_id, req.body, { new: true })
            return res.status(200).json(seo)
        } catch (e) {
            return res.status(500).json(e)
        }
    }
}

export default new SeoController()