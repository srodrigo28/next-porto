import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response } from "express";

export class portoNomeFilters implements ExceptionFilter{
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        response.status(409).json({
            statusCode: 409, message: exception.message
        });
    }
}
