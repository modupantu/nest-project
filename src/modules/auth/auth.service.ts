import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService:JwtService){}


  async validateUser(username:string, password:string):Promise<any>{
    const user = {name:"qwe",password:"123"}
    if(user&&user.password){
      const {password,...result} = user;
      return result;
    }
    return null;
  }


  async login(user:any):Promise<any>{
    const payload = {username:user.username, sub:user.userId};
    return {
      token:this.jwtService.sign(payload)
    };
  }
}
