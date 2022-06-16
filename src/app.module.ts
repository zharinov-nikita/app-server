import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { LinkModule } from './link/link.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    LinkModule
  ]
})
export class AppModule { }
