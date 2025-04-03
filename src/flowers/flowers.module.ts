import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { FlowersController } from './flowers.controller'
import { FlowersService } from './flowers.service'
import { ConfigService } from '@nestjs/config'

@Module({
	controllers: [FlowersController],
	providers: [FlowersService, PrismaService, ConfigService],
})
export class FlowersModule {}
