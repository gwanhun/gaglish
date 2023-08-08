import { Injectable } from '@nestjs/common';
import { CreateNoteWordDto } from './dto/create-note-word.dto';
import { UpdateNoteWordDto } from './dto/update-note-word.dto';

@Injectable()
export class NoteWordsService {
  create(createNoteWordDto: CreateNoteWordDto) {
    return 'This action adds a new noteWord';
  }

  findAll() {
    return `This action returns all noteWords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noteWord`;
  }

  update(id: number, updateNoteWordDto: UpdateNoteWordDto) {
    return `This action updates a #${id} noteWord`;
  }

  remove(id: number) {
    return `This action removes a #${id} noteWord`;
  }
}
