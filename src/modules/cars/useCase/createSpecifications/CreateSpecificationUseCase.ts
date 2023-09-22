import { ISpecificationRepositoryDTO } from "../../repositories/ISpecificatiosnRepository";
import { SpecificationRepository } from "../../repositories/implementations/SpecificatitonsRepository";

class CreateSpecificationUseCase {
    constructor(private specificationRepository: SpecificationRepository) {}

    execute({name, description}: ISpecificationRepositoryDTO) {
        const specificationAlredyExist = this.specificationRepository.findByName(name)

        if(specificationAlredyExist) {
            throw new Error("Specification Alredy exists!")
        }

        this.specificationRepository.create({name, description})
    }
}

export { CreateSpecificationUseCase }