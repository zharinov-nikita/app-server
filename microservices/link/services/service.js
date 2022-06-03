import Link from '../models/model.js'

class LinkService {
    async create(link) {
        return await Link.create(link)
    }
}

export default new LinkService()