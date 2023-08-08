import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevFiledsService } from './dev-fileds.service';
import { CreateDevFiledDto } from './dto/create-dev-filed.dto';
import { UpdateDevFiledDto } from './dto/update-dev-filed.dto';

@Controller('dev-fileds')
export class DevFiledsController {
  constructor(private readonly devFiledsService: DevFiledsService) {}

  @Post()
  create(@Body() createDevFiledDto: CreateDevFiledDto) {
    return this.devFiledsService.create(createDevFiledDto);
  }

  @Get()
  findAll() {
    return this.devFiledsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devFiledsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevFiledDto: UpdateDevFiledDto) {
    return this.devFiledsService.update(+id, updateDevFiledDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devFiledsService.remove(+id);
  }
}
