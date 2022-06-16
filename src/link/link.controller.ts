import { Body, Controller, Delete, Get, Param, Patch, Post, Res } from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { CreateLinkDto } from './dto/create-link.dto'
import { UpdateLinkDto } from './dto/update-link.dto'
import { Link } from './link.schema'
import { LinkService } from './link.service'

@Controller('link')
export class LinkController {
    constructor(private linkService: LinkService) { }

    @Post()
    async create(@Body() dto: CreateLinkDto): Promise<Link> {
        return await this.linkService.create(dto)
    }

    @Get()
    async find(): Promise<Link[]> {
        return await this.linkService.find()
    }

    @Get(':_id')
    async findById(@Param('_id') _id: ObjectId): Promise<Link> {
        return await this.linkService.findById(_id)
    }

    @Patch(':_id')
    async findByIdAndUpdate(@Param('_id') _id: ObjectId, @Body() dto: UpdateLinkDto): Promise<Link> {
        return await this.linkService.findByIdAndUpdate(_id, dto)
    }

    @Delete(':_id')
    async findByIdAndDelete(@Param('_id') _id: ObjectId) {
        return await this.linkService.findByIdAndDelete(_id)
    }

    @Get('/cc/:short')
    async redirect(@Param('short') short: Link['short'], @Res() res): Promise<Link['url']> {
        return res.status(302).redirect(await this.linkService.redirect(short))
    }
}
