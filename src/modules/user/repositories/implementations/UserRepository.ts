import { Repository, getRepository } from "typeorm";
import { IUsersRepository } from "../IUserRepository";
import { IUsersDTO } from "../../dtos/IUserDTO";
import { User } from "../../entities/User"



class UserRepository implements IUsersRepository {
    private repository: Repository<User>
    
    constructor() {
        this.repository = getRepository(User)
    }

    async create({ name, driver_license, email, password, avatar, id}: IUsersDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            password,
            driver_license,
            avatar,
            id,
        })

        await this.repository.save(user)
    };

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email })
        return user
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id)
        return user
    }
}

export { UserRepository }