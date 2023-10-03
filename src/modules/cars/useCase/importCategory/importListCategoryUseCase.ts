import fs from 'fs'
import { parse } from 'csv-parse'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { inject, injectable } from "tsyringe"

interface IIportCategories {
    name: string
    description: string
}

@injectable()
class ImportListCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: CategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IIportCategories[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IIportCategories[] = []

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [ name, description] = line;
                categories.push({
                    name,
                    description
                });
            })
            .on("end", () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on("error", (err) => {
                reject(err)
            })
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
        
        categories.map( async (categories) => {
            const { name, description } = categories

            const existsCategories = this.categoryRepository.findByName(name)

            if(!existsCategories) {
                this.categoryRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportListCategoryUseCase }