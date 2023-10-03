import { Categories } from "../../entities/Categories";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { inject, injectable } from "tsyringe"

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: CategoriesRepository) {}

    async execute(): Promise<Categories[]> {
        const categories = await this.categoryRepository.list()
        return categories;
    } 
}

export { ListCategoryUseCase }