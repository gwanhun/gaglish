import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoteWordsService } from './note-words.service';
import { CreateNoteWordDto } from './dto/create-note-word.dto';
import { UpdateNoteWordDto } from './dto/update-note-word.dto';

@Controller('note-words')
export class NoteWordsController {
  constructor(private readonly noteWordsService: NoteWordsService) {}

  @Post()
  create(@Body() createNoteWordDto: CreateNoteWordDto) {
    return this.noteWordsService.create(createNoteWordDto);
  }

  @Get()
  findAll() {
    return this.noteWordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteWordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteWordDto: UpdateNoteWordDto) {
    return this.noteWordsService.update(+id, updateNoteWordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteWordsService.remove(+id);
  }
}
