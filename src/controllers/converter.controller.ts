import {Body, JsonController, Post} from 'routing-controllers';
import nodeHtmlToImage from 'node-html-to-image'
import {HtmlToImgDto} from './dtos/html-to-img.dto';

@JsonController()
export class ConverterController {

  @Post('/html-to-img')
  async htmlToImg (@Body() { html }: HtmlToImgDto) {
    return await nodeHtmlToImage({html});
  }

}
