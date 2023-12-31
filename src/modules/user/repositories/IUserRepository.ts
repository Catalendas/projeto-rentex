import { IUsersDTO } from "../dtos/IUserDTO"
import { User } from "../entities/User"

interface IUsersRepository {
    create(data: IUsersDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
}

export { IUsersRepository}