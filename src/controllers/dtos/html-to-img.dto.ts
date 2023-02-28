import {IsNotEmpty, IsString} from 'class-validator';

export class HtmlToImgDto {

  @IsNotEmpty()
  @IsString()
  html: string;
}
