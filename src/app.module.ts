import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './conception/middleware'
import { FlowersModule } from './flowers/flowers.module'
import { MicroserviceModule } from './microservice/microservice.module'
@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		FlowersModule,
		MicroserviceModule,
		ClientsModule.register([
			{
				name: 'ORDER_SERVICE',
				transport: Transport.TCP,
				options: {
					host: 'localhost',
					port: 8877,
				},
			},
		]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('flowers')
	}
}
