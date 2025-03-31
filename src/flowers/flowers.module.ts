import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { FlowersController } from './flowers.controller'
import { FlowersService } from './flowers.service'

@Module({
	controllers: [FlowersController],
	providers: [FlowersService, PrismaService],
})
export class FlowersModule {}
