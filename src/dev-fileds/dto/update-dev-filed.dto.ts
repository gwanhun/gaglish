import { PartialType } from '@nestjs/mapped-types';
import { CreateDevFiledDto } from './create-dev-filed.dto';

export class UpdateDevFiledDto extends PartialType(CreateDevFiledDto) {}
