import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from '../prisma.service'
import { EnumAppMode } from '../types'
import { CreateFlowerDto } from './flowers.dto'

@Injectable()
export class FlowersService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService
	) {}

	findAll() {
		console.log(this.configService.get<EnumAppMode>('MODE'))
		return this.prisma.flower.findMany()
	}

	create(dto: CreateFlowerDto) {
		return this.prisma.flower.create({
			data: dto,
		})
	}
}
