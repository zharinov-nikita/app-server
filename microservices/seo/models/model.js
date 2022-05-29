import mongoose from "mongoose"

const Link = mongoose.Schema({
    offer: {
        type: String,
        require: true,
        unique: false
    },
    model: {
        type: String,
        require: false,
        unique: false,
        default: 'revshare'
    },
    title: {
        type: String,
        require: true,
        unique: false
    },
    description: {
        type: String,
        require: false,
        unique: false
    },
    url: {
        type: String,
        require: true,
        unique: false
    },
    short: {
        type: String,
        require: true,
        unique: true
    }

})

export default mongoose.model('Link', Link)