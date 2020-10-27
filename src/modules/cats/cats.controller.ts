import { Controller,Get,Post,Put,Delete,Patch,Body,Param,Headers,Query,Res,HttpStatus } from '@nestjs/common';
import {CatsService} from './cats.service';
import {Cat} from './interfaces/cat.interface'
import {CreateCatDto,ListAllEntities,UpdateCatDto} from "./dto/create-cat.dto";
import { Response } from 'express';
// @ts-ignore
import  {ApiBody,ApiParam,ApiQuery,ApiBearerAuth,ApiResponse,ApiTags} from  "@nestjs/swagger"
@ApiBearerAuth()
@ApiTags('cat模块接口')
@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return `${createCatDto.name} ${createCatDto.breed}`;
  // }
  // @Post()
  // create(@Res() res: Response) {
  //   console.log(res)
  //   res.status(HttpStatus.CREATED).send();
  // }
  @Post()
  @ApiBody({description:'创建'})
  async create(@Body() createCatDto: CreateCatDto) {
     this.CatsService.create(createCatDto);
  }
  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.CatsService.findAll();
  }


  @Patch(':id')
  @ApiParam({name:'id'})
  findOne(@Param('id') id: string) {
    return `This action returns a ${id} cat`;
  }
  @Put(':id')
  @ApiParam({name:'id'})
  @ApiBody({description:"更新"})
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} === ${updateCatDto.name}`;
  }
}
