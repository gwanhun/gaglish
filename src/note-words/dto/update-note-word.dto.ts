import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteWordDto } from './create-note-word.dto';

export class UpdateNoteWordDto extends PartialType(CreateNoteWordDto) {}
