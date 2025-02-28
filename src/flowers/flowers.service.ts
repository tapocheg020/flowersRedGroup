import { Injectable } from '@nestjs/common'

@Injectable()
export class FlowersService {
	findAll() {
		return [
			{
				name: 'Rose',
				color: 'red',
				price: 5,
			},
			{
				name: 'Lily',
				color: 'White',
				price: 8,
			},
			{
				name: 'Tulip',
				color: 'Yellow',
				price: 6,
			},
		]
	}
}
