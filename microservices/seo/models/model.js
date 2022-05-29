import mongoose from "mongoose"

const Seo = mongoose.Schema({
    mainKey: {
        type: String,
        require: true,
        unique: true
    },
    keys: {
        type: Array,
        require: true,
        default: [{ main: 'main', extra: ['extra - 1', 'extra - 2', 'extra - 3'] }]
    }
})

export default mongoose.model('Seo', Seo)