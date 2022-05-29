import Seo from '../models/model.js'

class SeoController {
    async create(req, res) {
        try {
            const { mainKey, keys } = req.body
            const seo = await Seo.create({ mainKey, keys })
            return res.status(200).json(seo)
        } catch (e) {
            return res.status(500).json({ message: 'error' })
        }
    }
    async update(req, res) {
        try {
            const { _id } = req.body
            const seo = await Seo.findByIdAndUpdate(_id, req.body, { new: true })
            return res.status(200).json(seo)
        } catch (e) {
            return res.status(500).json({ message: 'error' })
        }
    }
    async delete(req, res) {
        try {
            const { _id } = req.params
            const seo = await Seo.findByIdAndDelete({ _id })
            return res.status(200).json(seo)
        } catch (e) {
            return res.status(500).json({ message: 'error' })
        }
    }
    async getOne(req, res) {
        try {
            const { _id } = req.params
            const seo = await Seo.findById({ _id })
            return res.status(200).json(seo)
        } catch (e) {
            return res.status(500).json({ message: 'error' })
        }
    }
    async getAll(req, res) {
        try {
            const seo = await Seo.find()
            return res.status(200).json(seo)
        } catch (e) {
            return res.status(500).json({ message: 'error' })
        }
    }
}

export default new SeoController()