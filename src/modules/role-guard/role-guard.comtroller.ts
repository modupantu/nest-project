import {Controller,Get,Post,Query,UseGuards} from "@nestjs/common";
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guard/roles.guard'
import {ApiTags,ApiBearerAuth} from '@nestjs/swagger'

@ApiBearerAuth()
@ApiTags('role-guard')
@UseGuards(RolesGuard)
@Controller('/role-guard')
//http://localhost:3000/role-guard?id=123&user=admin
export class  RoleGuardComtroller {
  @Get()
  @Roles('admin')
  fetch(@Query(){id}):string{
    return 'asd'
  }
}
