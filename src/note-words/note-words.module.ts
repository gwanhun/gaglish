import { Module } from '@nestjs/common';
import { NoteWordsService } from './note-words.service';
import { NoteWordsController } from './note-words.controller';

@Module({
  controllers: [NoteWordsController],
  providers: [NoteWordsService]
})
export class NoteWordsModule {}
