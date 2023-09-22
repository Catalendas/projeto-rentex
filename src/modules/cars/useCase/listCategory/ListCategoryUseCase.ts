import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";


class ListCategoryUseCase {
    constructor(private categoryRepository: CategoriesRepository) {}

    execute() {
        const categories = this.categoryRepository.list()
        return categories;
    } 
}

export { ListCategoryUseCase }