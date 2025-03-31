import {
	Body,
	Controller,
	Get,
	Post,
	UseGuards,
	UseInterceptors,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { AuthGuard } from '../conception/guard'
import { LoggingInterceptor } from '../conception/interceptor'
import { CreateFlowerDto } from './flowers.dto'
import { FlowersService } from './flowers.service'

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
	constructor(private readonly flowersService: FlowersService) {}

	@Get()
	@UseGuards(AuthGuard)
	findAll() {
		return this.flowersService.findAll()
	}

	@Post()
	@UsePipes(new ValidationPipe())
	@UseGuards(AuthGuard)
	create(@Body() dto: CreateFlowerDto) {
		return this.flowersService.create(dto)
	}
}
