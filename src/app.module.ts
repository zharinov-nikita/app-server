import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { OfferModule } from './offer/offer.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    OfferModule
  ]
})
export class AppModule { }
