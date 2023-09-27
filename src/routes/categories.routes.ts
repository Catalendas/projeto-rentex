import { Router } from "express";
import multer from "multer"
import  { CreateCategoryController } from "../modules/cars/useCase/createCategory/CreateCategoryController"
import  listCategoryController  from "../modules/cars/useCase/listCategory";
import { importListCategoryController  } from "../modules/cars/useCase/importCategory";

const categoriesRouter = Router()
const upload = multer({
    dest: "./temp"
})

const createCategoryController = new CreateCategoryController()

categoriesRouter.post("/", createCategoryController.handle)

categoriesRouter.post("/import", upload.single("file"), (req, res) => {
    return importListCategoryController.handle(req, res)
})

categoriesRouter.get("/", (req, res) => {
    return listCategoryController().handle(req, res);
})

export { categoriesRouter }