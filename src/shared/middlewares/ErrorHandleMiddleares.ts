import AppError from '@shared/errors/AppError.js';
import type { NextFunction, Request, Response } from 'express';

export default class ErrorHandleMiddleares {
    public static handleError(error: Error, _request: Request, response: Response, _next: NextFunction) {
        if (error instanceof AppError) {
            return response.status(error.statusCode).json({
                type: 'error',
                message: error.message
            })
        }

        return response.status(500).json({
            type: "error",
            message: "Erro interno do servidor"
        })
    }
}
