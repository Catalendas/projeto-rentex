import { inject, injectable } from "tsyringe"
import { SpecificationRepository } from "../../repositories/implementations/SpecificatitonsRepository";

interface IRequest {
    name: string
    description: string
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: SpecificationRepository) {}

    async execute({name, description}: IRequest): Promise<void> {
        const specificationAlredyExist = await this.specificationRepository.findByName(name)

        if(specificationAlredyExist) {
            throw new Error("Specification Alredy exists!")
        }

        await this.specificationRepository.create({name, description})
    }
}

export { CreateSpecificationUseCase }