import { SpecificationRepository } from "../../repositories/implementations/SpecificatitonsRepository";
import { CreateSpecificationController } from "./CreateSpecificationCrontroller";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export { createSpecificationController }