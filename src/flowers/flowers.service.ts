import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { CreateFlowerDto } from './flowers.dto'

@Injectable()
export class FlowersService {
	constructor(private readonly prisma: PrismaService) {}

	findAll() {
		return this.prisma.flower.findMany()

		// return [
		// 	{
		// 		name: 'Rose',
		// 		color: 'red',
		// 		price: 5,
		// 	},
		// 	{
		// 		name: 'Lily',
		// 		color: 'White',
		// 		price: 8,
		// 	},
		// 	{
		// 		name: 'Tulip',
		// 		color: 'Yellow',
		// 		price: 6,
		// 	},
		// ]
	}

	create(dto: CreateFlowerDto) {
		return this.prisma.flower.create({
			data: dto,
		})
	}
}
