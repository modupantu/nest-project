import { Controller,Get,Post,Put,Delete } from '@nestjs/common';
import {CatsService} from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}
  @Get()
  findAll():string{
    return this.CatsService.findAll()
  }
  @Post()
  postAll():string{
    return this.CatsService.post()
  }
}
