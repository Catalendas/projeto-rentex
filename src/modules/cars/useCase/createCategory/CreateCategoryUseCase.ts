import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../error/AppError";

interface IRequest {
    name: string 
    description: string
}

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository) {}

    async execute({name, description}: IRequest): Promise<void> {
        const categoryAlredyExists = await this.categoriesRepository.findByName(name)

        if(categoryAlredyExists) {
            throw new AppError("Category Alredy exists!");
        }
        
        await this.categoriesRepository.create({name, description})
    }
};

export { CreateCategoryUseCase };