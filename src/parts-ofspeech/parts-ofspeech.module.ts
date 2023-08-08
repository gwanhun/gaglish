import { Module } from '@nestjs/common';
import { PartsOfspeechService } from './parts-ofspeech.service';
import { PartsOfspeechController } from './parts-ofspeech.controller';

@Module({
  controllers: [PartsOfspeechController],
  providers: [PartsOfspeechService]
})
export class PartsOfspeechModule {}
