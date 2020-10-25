import {PipeTransform,Injectable,ArgumentMetadata,BadRequestException} from '@nestjs/common'
/*
* int 管道 的实现
* */

@Injectable()
export class ParseIntPipe implements PipeTransform<string>{
  async transform(value:string,metadata:ArgumentMetadata){
    const val = parseInt(value,10);
    if(isNaN(val)){
      throw new BadRequestException("Validation failed");
    }
    return val;
  }
}
