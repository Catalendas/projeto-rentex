import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { ListSpecificationController } from '../modules/cars/useCase/listSpecifications/ListSpecificationController';
import { CreateSpecificationController } from '../modules/cars/useCase/createSpecifications/CreateSpecificationCrontroller';

const specificationRouter = Router()

const createSpecificationConreoller = new CreateSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationRouter.use(ensureAuthenticated)
specificationRouter.post("/", createSpecificationConreoller.handle)

specificationRouter.get("/", listSpecificationController.handle)

export { specificationRouter }