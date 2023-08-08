import { PartialType } from '@nestjs/mapped-types';
import { CreatePartsOfspeechDto } from './create-parts-ofspeech.dto';

export class UpdatePartsOfspeechDto extends PartialType(CreatePartsOfspeechDto) {}
