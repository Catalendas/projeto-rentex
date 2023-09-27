import { Categories } from "../entities/Categories"

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Categories>
    list(): Promise<Categories[]>
    create({name, description}: ICreateCategoryDTO): Promise<void>
}

export { ICreateCategoryDTO, ICategoriesRepository}