import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { erroFuncaoIdExists } from "../erros/erroFuncaoIdExists";
import { Response } from "express";

@Catch(erroFuncaoIdExists)
export class filterFuncaoIdExists implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();

        res.status(409).json({
            statusCode: 409,
            message: exception.message
        })
    }
}