import mongoose from "mongoose"


const Domain = mongoose.Schema({
    value: { type: String, require: true, unique: true, default: 'https://app.com' }
})

export default mongoose.model('Domain', Domain)