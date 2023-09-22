import { Categories } from "../model/Categories"

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Categories
    list(): Categories[]
    create({name, description}: ICreateCategoryDTO): void
}

export { ICreateCategoryDTO, ICategoriesRepository}