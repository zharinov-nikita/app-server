import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model, ObjectId } from "mongoose"
import { CreateLinkDto } from "./dto/create-link.dto"
import { UpdateLinkDto } from "./dto/update-link.dto"
import { Link, LinkDocument } from "./link.schema"

@Injectable()
export class LinkService {
    constructor(@InjectModel(Link.name) private linkModel: Model<LinkDocument>) { }

    async create(dto: CreateLinkDto): Promise<Link> {
        return await this.linkModel.create(dto)
    }

    async find(): Promise<Link[]> {
        return await this.linkModel.find()
    }

    async findById(_id: ObjectId): Promise<Link> {
        return await this.linkModel.findById({ _id })
    }

    async findByIdAndUpdate(_id: ObjectId, dto: UpdateLinkDto): Promise<Link> {
        return await this.linkModel.findByIdAndUpdate(_id, dto, { new: true })
    }

    async findByIdAndDelete(_id: ObjectId): Promise<Link> {
        return await this.linkModel.findByIdAndDelete({ _id })
    }

    async redirect(short: Link['short']): Promise<Link['url']> {
        return await (await this.linkModel.findOne({ short })).url
    }
}