import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model, ObjectId } from "mongoose"
import { CreateOfferDto } from "./dto/create-offer.dto"
import { UpdateOfferDto } from "./dto/update-offer.dto"
import { Offer, OfferDocument } from "./offer.schema"

@Injectable()
export class OfferService {
    constructor(@InjectModel(Offer.name) private offerModel: Model<OfferDocument>) { }

    async create(dto: CreateOfferDto): Promise<Offer> {
        return await this.offerModel.create(dto)
    }

    async find(): Promise<Offer[]> {
        return await this.offerModel.find()
    }

    async findById(_id: ObjectId): Promise<Offer> {
        return await this.offerModel.findById({ _id })
    }

    async findByIdAndUpdate(_id: ObjectId, dto: UpdateOfferDto): Promise<Offer> {
        return await this.offerModel.findByIdAndUpdate(_id, dto, { new: true })
    }

    async findByIdAndDelete(_id: ObjectId): Promise<Offer> {
        return await this.offerModel.findByIdAndDelete({ _id })
    }

    async redirect(short: Offer['short']): Promise<Offer['url']> {
        return await (await this.offerModel.findOne({ short })).url
    }
}