import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { WordsModule } from './words/words.module';
import { NoteWordsModule } from './note-words/note-words.module';
import { DevFiledsModule } from './dev-fileds/dev-fileds.module';
import { PartsOfspeechModule } from './parts-ofspeech/parts-ofspeech.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    NotesModule,
    WordsModule,
    NoteWordsModule,
    DevFiledsModule,
    PartsOfspeechModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
