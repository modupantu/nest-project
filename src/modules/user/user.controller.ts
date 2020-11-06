import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(private readonly  userService:UserService){}

  @Get()
  findAll(){
    return this.userService.findAll()
  }


  @Post()
  async create(@Body() param){
    const  newParam = {...param,status:true};
    await this.userService.create(newParam);
    return true
  }

  @Post('/many')
  async createMany(@Body() users){
    const newUser = users.map(user=>({...user,status:true}));
    await this.userService.createMany(newUser);
    return true;
  }
}
