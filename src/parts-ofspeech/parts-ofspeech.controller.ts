import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartsOfspeechService } from './parts-ofspeech.service';
import { CreatePartsOfspeechDto } from './dto/create-parts-ofspeech.dto';
import { UpdatePartsOfspeechDto } from './dto/update-parts-ofspeech.dto';

@Controller('parts-ofspeech')
export class PartsOfspeechController {
  constructor(private readonly partsOfspeechService: PartsOfspeechService) {}

  @Post()
  create(@Body() createPartsOfspeechDto: CreatePartsOfspeechDto) {
    return this.partsOfspeechService.create(createPartsOfspeechDto);
  }

  @Get()
  findAll() {
    return this.partsOfspeechService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partsOfspeechService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartsOfspeechDto: UpdatePartsOfspeechDto) {
    return this.partsOfspeechService.update(+id, updatePartsOfspeechDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partsOfspeechService.remove(+id);
  }
}
