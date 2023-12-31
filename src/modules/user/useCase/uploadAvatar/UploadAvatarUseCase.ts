import { inject, injectable } from "tsyringe"
import { UserRepository } from "../../repositories/implementations/UserRepository"

interface IRequest {
    user_id: string
    avatar_file: string
}

@injectable()
class UploadAvatarUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository
    ) {}

    async execute({user_id, avatar_file}: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        user.avatar = avatar_file;

        await this.userRepository.create(user)
    }
}

export { UploadAvatarUseCase }