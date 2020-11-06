import { Controller, Post, Get, Request, UseGuards } from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from '@nestjs/passport'
@Controller()
export class AuthController {
  constructor(private readonly authService:AuthService){}
  //登录
  @UseGuards(AuthGuard('local')) //路由守卫
  @Post('/login')
  async login(@Request() req){
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/me')
  getProfile(@Request() req){
    return req.user;
  }
}

