import { Categories } from "../../entities/Categories";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";


class ListCategoryUseCase {
    constructor(private categoryRepository: CategoriesRepository) {}

    async execute(): Promise<Categories[]> {
        const categories = await this.categoryRepository.list()
        return categories;
    } 
}

export { ListCategoryUseCase }