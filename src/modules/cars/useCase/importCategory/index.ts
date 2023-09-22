import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportListCategoryController } from "./importListCategoryController";
import { ImportListCategoryUseCase } from "./importListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importListCategoryUseCase = new ImportListCategoryUseCase(categoriesRepository)
const importListCategoryController = new ImportListCategoryController(importListCategoryUseCase)

export { importListCategoryController }