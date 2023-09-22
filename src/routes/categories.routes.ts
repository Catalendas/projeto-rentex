import { Router } from "express";
import multer from "multer"
import { createCategoryController } from "../modules/cars/useCase/createCategory";
import { listCategoryController } from "../modules/cars/useCase/listCategory";
import { importListCategoryController  } from "../modules/cars/useCase/importCategory";

const categoriesRouter = Router()
const upload = multer({
    dest: "./temp"
})

categoriesRouter.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
})

categoriesRouter.post("/import", upload.single("file"), (req, res) => {
    return importListCategoryController.handle(req, res)
})

categoriesRouter.get("/", (req, res) => {
    return listCategoryController.handle(req, res);
})

export { categoriesRouter }