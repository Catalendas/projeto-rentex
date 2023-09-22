import { SpecificationRepository } from "../../repositories/implementations/SpecificatitonsRepository";


class ListSpecificationUseCase {
    constructor(private specificationsRepository: SpecificationRepository) {}

    execute() {
        const specifications = this.specificationsRepository.list()
        return specifications
    }
}

export { ListSpecificationUseCase }