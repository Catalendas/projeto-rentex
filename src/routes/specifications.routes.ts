import { Router } from 'express'
import { createSpecificationController } from '../modules/cars/useCase/createSpecifications'
import { listSpecificationController } from '../modules/cars/useCase/listSpecifications';

const specificationRouter = Router()


specificationRouter.post("/", (req, res) => {
    return createSpecificationController.handle(req, res);
})

specificationRouter.get("/", (req, res) => {
    return listSpecificationController.handle(req, res);
})

export { specificationRouter }