import { Router } from "express";
import multer from "multer"
import  { CreateCategoryController } from "../modules/cars/useCase/createCategory/CreateCategoryController"
import  { ListCategoryController }  from "../modules/cars/useCase/listCategory/ListCategoryController";
import { ImportListCategoryController  } from "../modules/cars/useCase/importCategory/importListCategoryController";

const categoriesRouter = Router()
const upload = multer({
    dest: "./temp"
})

const createCategoryController = new CreateCategoryController()
const importListCategoryController = new ImportListCategoryController()
const listCategoryController = new ListCategoryController()

categoriesRouter.post("/", createCategoryController.handle)

categoriesRouter.post("/import", importListCategoryController.handle)

categoriesRouter.get("/", listCategoryController.handle)

export { categoriesRouter }