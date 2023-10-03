import { SpecificationRepository } from "../../repositories/implementations/SpecificatitonsRepository";
import { inject, injectable } from "tsyringe"

@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: SpecificationRepository) {}

    async execute() {
        const specifications = await this.specificationsRepository.list()
        return specifications
    }
}

export { ListSpecificationUseCase }