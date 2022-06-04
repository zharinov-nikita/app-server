import { Request, Response } from 'express'
import Service from '../services/service'
import Message from '../messages/message'
import { IProject } from '../models/interfaces/model'


class Controller {
    async create(req: Request, res: Response) {
        try {
            const { title, offer, status }: IProject = req.body
            const project: IProject = await Service.create({ title, offer, status })
            return res.status(200).json(project)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }


    async update(req: Request, res: Response) {
        try {
            const { _id, title, offer, status }: IProject = req.body
            const project: IProject = await Service.update({ _id, title, offer, status })
            return res.status(200).json(project)
        } catch (e) {
            const error = Message.show('error', 'error')
            return res.status(500).json(error)
        }
    }
}

export default new Controller()