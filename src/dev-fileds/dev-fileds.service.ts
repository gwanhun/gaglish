import { Injectable } from '@nestjs/common';
import { CreateDevFiledDto } from './dto/create-dev-filed.dto';
import { UpdateDevFiledDto } from './dto/update-dev-filed.dto';

@Injectable()
export class DevFiledsService {
  create(createDevFiledDto: CreateDevFiledDto) {
    return 'This action adds a new devFiled';
  }

  findAll() {
    return `This action returns all devFileds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devFiled`;
  }

  update(id: number, updateDevFiledDto: UpdateDevFiledDto) {
    return `This action updates a #${id} devFiled`;
  }

  remove(id: number) {
    return `This action removes a #${id} devFiled`;
  }
}
