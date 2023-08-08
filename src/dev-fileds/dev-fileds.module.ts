import { Module } from '@nestjs/common';
import { DevFiledsService } from './dev-fileds.service';
import { DevFiledsController } from './dev-fileds.controller';

@Module({
  controllers: [DevFiledsController],
  providers: [DevFiledsService]
})
export class DevFiledsModule {}
