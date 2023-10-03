import { Specification } from "../../entities/Specification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "../ISpecificatiosnRepository";
import { getRepository, Repository } from "typeorm"

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>

    private static INSTANCE: SpecificationRepository;

    constructor() {
        this.repository = getRepository(Specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ name })
        return specification
    }

    async create({ name, description }: ISpecificationRepositoryDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        })

        await this.repository.save(specification)
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find()
        return specifications
    } 
}

export { SpecificationRepository }