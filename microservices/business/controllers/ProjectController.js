import ProjectModel from '../models/ProjectModel.js'
import SeoModel from '../models/SeoModel.js'
import DomainModel from '../models/DomainModel.js'

class ProjectController {
    async create(req, res) {
        try {
            const domain = await DomainModel.create({ domain: Date.now() })
            const seo = await SeoModel.create({})
            const project = await ProjectModel.create({ seo, domain })
            return res.status(200).json(project)
        } catch (e) {
            return res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const project = await ProjectModel.find()
            return res.status(200).json(project)
        } catch (e) {
            return res.status(500).json(e)
        }
    }


    async update(req, res) {
        try {
            const { _id } = req.body
            const project = await ProjectModel.findByIdAndUpdate(_id, req.body, { new: true })
            return res.status(200).json(project)
        } catch (e) {
            return res.status(500).json(e)
        }
    }


}

export default new ProjectController()