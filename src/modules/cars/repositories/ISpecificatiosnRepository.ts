import { Specification } from "../entities/Specification";

interface ISpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    findByName(name: string): Promise<Specification>
    list(): Promise<Specification[]>
    create({name, description}: ISpecificationRepositoryDTO): Promise<void>
}

export { ISpecificationRepositoryDTO, ISpecificationRepository}