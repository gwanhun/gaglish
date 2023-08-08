import { Injectable } from '@nestjs/common';
import { CreatePartsOfspeechDto } from './dto/create-parts-ofspeech.dto';
import { UpdatePartsOfspeechDto } from './dto/update-parts-ofspeech.dto';

@Injectable()
export class PartsOfspeechService {
  create(createPartsOfspeechDto: CreatePartsOfspeechDto) {
    return 'This action adds a new partsOfspeech';
  }

  findAll() {
    return `This action returns all partsOfspeech`;
  }

  findOne(id: number) {
    return `This action returns a #${id} partsOfspeech`;
  }

  update(id: number, updatePartsOfspeechDto: UpdatePartsOfspeechDto) {
    return `This action updates a #${id} partsOfspeech`;
  }

  remove(id: number) {
    return `This action removes a #${id} partsOfspeech`;
  }
}
