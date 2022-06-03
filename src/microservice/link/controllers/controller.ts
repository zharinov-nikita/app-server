import { Request, Response } from 'express'
import { ILink } from '../models/interfaces/model'
import Service from '../services/service'
import Message from '../messages/message'


class Controller {
    async create(req: Request, res: Response) {
        try {
            const data: ILink = req.body
            const link = await Service.create(data)
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
            const data: ILink = req.body
            const link = await Service.update(data)
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