import { Module, NestModule } from '@nestjs/common'
import { FlowersModule } from './flowers/flowers.module'
@Module({
	imports: [FlowersModule],
})
export class AppModule implements NestModule {}
