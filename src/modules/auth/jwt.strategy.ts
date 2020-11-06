import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { key } from "./keys";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      jwtFromRequest:ExtractJwt.fromHeader('token'),
      ignoreExpiration:false,
      secretOrKey: key.secret,
    })
  }
  async validate(payload:any){
    return {userId:payload.sub, username:payload.username};
  }
}
