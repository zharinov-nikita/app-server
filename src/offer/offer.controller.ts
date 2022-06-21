import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateOfferDto } from './dto/create-offer.dto'
import { UpdateOfferDto } from './dto/update-offer.dto'
import { Offer } from './offer.schema'
import { OfferService } from './offer.service'

@Controller('api/offer')
export class OfferController {
    constructor(private offerService: OfferService) { }

    @Post()
    async create(@Body() dto: CreateOfferDto): Promise<Offer> {
        return await this.offerService.create(dto)
    }

    @Get()
    async find(): Promise<Offer[]> {
        return await this.offerService.find()
    }

    @Get(':_id')
    async findById(@Param('_id') _id: ObjectId): Promise<Offer> {
        return await this.offerService.findById(_id)
    }

    @Patch(':_id')
    async findByIdAndUpdate(@Param('_id') _id: ObjectId, @Body() dto: UpdateOfferDto): Promise<Offer> {
        return await this.offerService.findByIdAndUpdate(_id, dto)
    }

    @Delete(':_id')
    async findByIdAndDelete(@Param('_id') _id: ObjectId) {
        return await this.offerService.findByIdAndDelete(_id)
    }

    @Get('/cc/:short')
    async redirect(@Param('short') short: Offer['short'], @Res() res): Promise<Offer['url']> {
        return res.status(302).redirect(await this.offerService.redirect(short))
    }
}
