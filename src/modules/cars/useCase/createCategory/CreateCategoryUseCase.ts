import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICreateCategoryDTO } from "../../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) {}

    execute({name, description}: ICreateCategoryDTO) {
        const categoryAlredyExists = this.categoriesRepository.findByName(name)

        if(categoryAlredyExists) {
            throw new Error("Category Alredy exists!");
        }
        
        this.categoriesRepository.create({name, description})
    }
};

export { CreateCategoryUseCase };