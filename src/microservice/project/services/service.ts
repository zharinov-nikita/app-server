import Model from '../models/model'
import { IProject } from '../models/interfaces/model'

class Service {
    async create(project: IProject) {
        return await Model.create(project)
    }

    async delete(_id: string) {
        if (_id) {
            return await Model.findByIdAndDelete({ _id })
        }
        throw new Error()
    }


    async update(project: IProject) {
        if (project?._id) {
            return await Model.findByIdAndUpdate(project._id, project, { new: true })
        }
        throw new Error()
    }
}

export default new Service()