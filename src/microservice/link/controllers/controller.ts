import { Request, Response } from 'express'
import Service from '../services/service'
import Message from '../messages/message'
import { ILink } from '../models/interfaces/model'


class Controller {
    async create(req: Request, res: Response) {
        try {
            const { offer, model, title, description, url, short }: ILink = req.body
            const link = await Service.create({ offer, model, title, description, url, short })
            return res.status(200).json(link)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { _id } = req.params
            const link = await Service.delete(_id)
            return res.status(200).json(link)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }

    async read(req: Request, res: Response) {
        try {
            const { _id } = req.params
            const link = await Service.read(_id)
            return res.status(200).json(link)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }

    async readAll(req: Request, res: Response) {
        try {
            const link = await Service.readAll()
            return res.status(200).json(link)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { _id, offer, model, title, description, url, short }: ILink = req.body
            const link = await Service.update({ _id, offer, model, title, description, url, short })
            return res.status(200).json(link)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }


    async redirect(req: Request, res: Response) {
        try {
            const { short } = req.params
            const link = await Service.redirect(short)
            if (link) {
                return res.redirect(link.url)
            }
            const warning = Message.show('warning', 'warning')
            return res.status(400).json(warning)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }

}

export default new Controller()