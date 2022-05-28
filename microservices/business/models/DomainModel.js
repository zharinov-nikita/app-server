import mongoose from "mongoose"


const Domain = mongoose.Schema({
    domain: { type: String, require: false, unique: false }
})

export default mongoose.model('Domain', Domain)