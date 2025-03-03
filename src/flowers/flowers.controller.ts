import {
	Controller,
	Get,
	Query,
	UseGuards,
	UseInterceptors,
} from '@nestjs/common'
import { AuthGuard } from '../conception/guard'
import { LoggingInterceptor } from '../conception/interceptor'
import { ParseIntPipe } from '../conception/pipe'
import { FlowersService } from './flowers.service'

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {}

	@Get()
	@UseGuards(AuthGuard)
	findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
		return this.flowersService.findAll()
	}
}
