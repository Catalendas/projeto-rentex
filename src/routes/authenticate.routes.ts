import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../modules/user/authenticateUser/AuthenticateUserController";
import { specificationRouter } from "./specifications.routes";

const authenticateRouter = Router()

const authenticateUserController = new AuthenticateUserController()

specificationRouter.use(ensureAuthenticated)
authenticateRouter.post("/sessions", authenticateUserController.handle)

export { authenticateRouter }