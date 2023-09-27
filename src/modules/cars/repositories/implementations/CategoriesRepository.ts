import { Categories } from "../../entities/Categories"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository"
import { getRepository, Repository } from "typeorm"

class CategoriesRepository implements ICategoriesRepository{
    private repository: Repository<Categories>

    private static INSTACE: CategoriesRepository

    constructor() {
        this.repository = getRepository(Categories)
    }

    async create({name, description}: ICreateCategoryDTO): Promise<void> {
        const categories = this.repository.create({
            description,
            name
        })

        await this.repository.save(categories)
    }

    async list(): Promise<Categories[]> {
        const categories = await this.repository.find();
        return categories
    }

    async findByName(name: string): Promise<Categories> {
        const category = await this.repository.findOne({ name })
        return category
    }
}

export { CategoriesRepository }