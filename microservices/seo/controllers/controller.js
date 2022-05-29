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
}

export default new SeoController()