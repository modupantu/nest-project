import {CanActivate,ExecutionContext,Injectable} from "@nestjs/common"
import {Reflector} from "@nestjs/core"

/*
* 路由守卫
* */

@Injectable()
export class RolesGuard implements CanActivate{
    constructor(private readonly  reflector:Reflector){}
    canActivate(context: ExecutionContext): boolean{
        const roles = this.reflector.get<string[]>('roles',context.getHandler());
        if(!roles){
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const {user} = request.query;
        return !!roles.find(role=>role===user);
    }
}
