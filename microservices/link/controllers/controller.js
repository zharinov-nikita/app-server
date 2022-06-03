import Link from '../models/model.js'
import LinkService from '../services/service.js'

class LinkController {
    async createLink(req, res) {
        try {
            const link = await LinkService.create(req.body)
            return res.status(200).json(link)
        } catch (e) {
            return res.status(500).json({ message: "Некорректные данные" })
        }
    }
    async getLinks(req, res) {
        try {
            const links = await Link.find()
            if (links.length) {
                return res.status(200).json(links)
            }
            return res.status(400).json({ message: 'Ссылок нет' })
        } catch (e) {
            return res.status(500).json({ message: "Серверная ошибка" })
        }
    }

    async deleteLink(req, res) {
        try {
            const { _id } = req.params
            const link = await Link.findOneAndDelete({ _id })
            return res.status(200).json(link)
        } catch (e) {
            return res.status(500).json({ message: "Серверная ошибка" })
        }
    }

    async deleteLink(req, res) {
        try {
            const { _id } = req.params
            const link = await Link.findOneAndDelete({ _id })
            return res.status(200).json(link)
        } catch (e) {
            return res.status(500).json({ message: "Серверная ошибка" })
        }
    }


    async updateLink(req, res) {
        try {
            const { _id } = req.body
            if (_id) {
                const link = await Link.findByIdAndUpdate(_id, req.body, { new: true })
                return res.status(200).json(link)
            } else {
                return res.status(400).json({ message: { type: "ошибка", text: "Неверный _id" } })
            }
        } catch (e) {
            return res.status(500).json({ message: { type: "ошибка", text: "Ошибка на сервере" } })
        }
    }

    async redirectLink(req, res) {
        try {
            const { short } = req.params
            if (short) {
                const { url } = await Link.findOne({ short })
                return res.redirect(url)
            } else {
                return res.status(400).json({ message: { type: "ошибка", text: "Неверный url" } })
            }
        } catch (e) {
            return res.status(500).json({ message: { type: "ошибка", text: "Ошибка на сервере" } })
        }
    }
}

export default new LinkController()