import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type LinkDocument = Link & Document

@Schema()
export class Link {
    @Prop({ type: String, required: true })
    offer: string

    @Prop({ type: String, required: true })
    model: string

    @Prop({ type: String, required: true })
    title: string

    @Prop({ type: String, required: true })
    description: string

    @Prop({ type: String, required: true })
    url: string

    @Prop({ type: String, required: true, unique: true })
    short: string
}

export const LinkSchema = SchemaFactory.createForClass(Link)