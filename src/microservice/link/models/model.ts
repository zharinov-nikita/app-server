import { Schema, model } from "mongoose"
import { ILink } from "./interfaces/model"

export const LinkSchema = new Schema({
    offer: { type: String, required: true },
    model: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    short: { type: String, required: true, unique: true }
})

export default model<ILink>('Link', LinkSchema)
