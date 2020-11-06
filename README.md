<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
 
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## day1 controller
要使用 CLI 创建控制器，只需执行$ nest g controller cats命令。

@Request()	req
@Response()	res
@Next()	next
@Session()	req.session
@Param(key?: string)	req.params/req.params[key]
@Body(key?: string)	req.body/req.body[key]
@Query(key?: string)	req.query/req.query[key]
@Headers(name?: string)	req.headers/req.headers[name]

### Nestjs 路由通配符 
@Get('ab*cd')
### Nestjs 状态码 
@HttpCode(204)
### Nestjs Headers 
@Header('Cache-Control', 'none')
### Nestjs 重定向 
@Redirect()带有必需的url参数和可选的statusCode参数。 如果省略，则statusCode默认为302。
@Redirect('https://nestjs.com', 301)
```nestjs
@Get('docs')
@Redirect('https://docs.nestjs.com', 302)
getDocs(@Query('version') version) {
  if (version && version === '5') {
    return { url: 'https://docs.nestjs.com/v5/' };
  }
}
```
### Nestjs 路由参数
@Param()装饰器访问以这种方式声明的路由参数，该装饰器应添加到函数签名中
```nestjs
@Get(':id')
findOne(@Param() params): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
@Get(':id')
findOne(@Param('id') id): string {
  return `This action returns a #${id} cat`;
}
```
### Async / await
```javascript 1.8
@Get()
async findAll(): Promise<any[]> {
  return [];
}

@Get()
findAll(): Observable<any[]> {
  return of([]);
}
```
### 请求负载  dto
创建CreateCatDto类：
```javascript 
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
// 使用
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return 'This action adds a new cat';
}
```

## 服务 
$ nest g service cats
```javascript
$ nest g service cats
//cats.service.ts

```
## 模块
$ nest g module cats

## 健康检查
- src\config\statusMonitor.ts

## jwt
