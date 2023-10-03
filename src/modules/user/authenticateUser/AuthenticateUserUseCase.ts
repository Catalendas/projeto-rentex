import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../error/AppError";
import { IUsersRepository } from "../repositories/IUserRepository";

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: {
        name: string
        email: string
    }
    token: string
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email)

        if (!user) {
            throw new AppError("Email or password are incorrect")
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new AppError("Email or password are incorrect")
        }

        const token = sign({}, "c80b7c0517cac46f83dfd8c581fc4d41", {
            subject: user.id,
            expiresIn: "1d"
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn
    }
}

export { AuthenticateUserUseCase }