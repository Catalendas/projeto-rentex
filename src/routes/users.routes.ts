import { Router } from "express";
import multer from "multer";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/user/useCase/createUser/CreateUserController";
import { UploadAvatarController } from "../modules/user/useCase/uploadAvatar/UploadAvatarController";
import uploadConfig from "../config/upload"

const userRouter = Router()

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController()
const uploadAvatarController = new UploadAvatarController()

userRouter.post("/", createUserController.handle)

userRouter.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), uploadAvatarController.handle)

export { userRouter }