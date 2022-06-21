import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { OfferController } from "./offer.controller"
import { Offer, OfferSchema } from "./offer.schema"
import { OfferService } from "./offer.service"

@Module({
    imports: [MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }])],
    controllers: [OfferController],
    providers: [OfferService],
})
export class OfferModule { }