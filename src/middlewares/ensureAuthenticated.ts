import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"
import { AppError } from "../error/AppError";
import { UserRepository } from "../modules/user/repositories/implementations/UserRepository";

interface IPayload {
    sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(" ")
    verify(token, "c80b7c0517cac46f83dfd8c581fc4d41")

    try {
        const { sub: user_id } = verify(
            token, 
            "c80b7c0517cac46f83dfd8c581fc4d41"
        ) as IPayload

        const usersRepository = new UserRepository()

        const user = usersRepository.findById(user_id)

        if (!user) {
            throw new AppError("User does not exists!", 401)
        }

        req.user = {
            id: user_id
        }

        next()
    } catch {
        throw new AppError("Invalid token!", 401)
    }
}