import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type OfferDocument = Offer & Document

@Schema()
export class Offer {
    @Prop({ type: String, required: true })
    name: string

    @Prop({ type: String, required: true })
    type: string

    @Prop({ type: String, required: true })
    model: string

    @Prop({ type: String, required: true })
    pay: string

    @Prop({ type: String, required: true })
    url: string

    @Prop({ type: String, required: true, unique: true })
    short: string
}

export const OfferSchema = SchemaFactory.createForClass(Offer)