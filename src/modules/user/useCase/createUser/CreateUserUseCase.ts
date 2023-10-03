import { IUsersDTO } from "../../dtos/IUserDTO";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"
import { AppError } from "../../../../error/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository
    ) {}

    async execute({ name, driver_license, email, password}: IUsersDTO): Promise<void> {
        const emailExist = await this.userRepository.findByEmail(email);

        if (emailExist) {
            throw new AppError("The email is already being used")
        }

        const passwordHash = await hash(password, 8)

        await this.userRepository.create({ name, driver_license, email, password: passwordHash })
    }
}

export { CreateUserUseCase }