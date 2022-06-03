import Model from '../models/model'
import { ILink } from '../models/interfaces/model'

class Service {
    async create(link: ILink) {
        return await Model.create(link)
    }

    async delete(_id: string) {
        if (_id) {
            return await Model.findByIdAndDelete({ _id })
        }
        throw new Error()
    }

    async read(_id: string) {
        if (_id) {
            return await Model.findById({ _id })
        }
        throw new Error()
    }

    async readAll() {
        return await Model.find()
    }

    async update(link: ILink) {
        if (link?._id) {
            return await Model.findByIdAndUpdate(link._id, link, { new: true })
        }
        throw new Error()
    }

    async redirect(short: string) {
        if (short) {
            return await Model.findOne({ short })
        }
        throw new Error()
    }
}

export default new Service()