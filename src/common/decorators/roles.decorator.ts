import { SetMetadata } from "@nestjs/common"

/*
* 路由守卫装饰器
* */
export const  Roles = (...roles:string[])=>SetMetadata('roles',roles);
