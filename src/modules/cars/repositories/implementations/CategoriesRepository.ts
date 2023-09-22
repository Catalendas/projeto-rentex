import { Categories } from "../../model/Categories"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository"

class CategoriesRepository implements ICategoriesRepository{
    private categories: Categories[]

    private static INSTACE: CategoriesRepository

    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoriesRepository {

        if (!CategoriesRepository.INSTACE) {
            CategoriesRepository.INSTACE = new CategoriesRepository()
        }

        return CategoriesRepository.INSTACE
    }

    create({name, description}: ICreateCategoryDTO): void {
        const category = new Categories()    

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })

        this.categories.push(category)
    }

    list(): Categories[] {
        return this.categories
    }

    findByName(name: string): Categories {
        const category = this.categories.find((category) => category.name === name)
        return category
    }
}

export { CategoriesRepository }