import { Schema, model } from "mongoose"
import { IProject } from "./interfaces/model"

export const ProjectSchema = new Schema({
    title: { type: String, required: true },
    offer: { type: String, required: true },
    status: { type: String, required: true, default: 'сео' }
})

export default model<IProject>('Project', ProjectSchema)
