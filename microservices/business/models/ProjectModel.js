import mongoose from "mongoose"

const Project = mongoose.Schema({
    title: {
        type: String,
        require: true,
        default: 'title',
    },
    offer: {
        type: String,
        require: true,
        default: 'offer',
    },
    status: {
        type: String,
        require: true,
        default: 'seo'
    },
    creationDate: {
        type: String,
        require: true,
        default: '22.02.02',
    },
    seo: { type: mongoose.Schema.Types.ObjectId, ref: 'Seo' },
    domain: { type: mongoose.Schema.Types.ObjectId, ref: 'Domain' }
})

export default mongoose.model('Project', Project)