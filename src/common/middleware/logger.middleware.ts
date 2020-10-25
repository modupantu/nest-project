import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        let {path,method} =req
        console.log(`${path}===${method}`);
        next();
    }
}
