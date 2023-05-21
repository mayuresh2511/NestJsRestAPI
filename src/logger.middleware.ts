/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware, NestModule } from "@nestjs/common";
import {Request, Response, NextFunction} from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware{

    use(req: any, res: any, next: NextFunction) {
        console.log('Request.....');
        next();
    }
    
}