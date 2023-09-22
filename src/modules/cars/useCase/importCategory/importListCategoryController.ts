import { Request, Response } from "express";
import { ImportListCategoryUseCase } from "./importListCategoryUseCase";

class ImportListCategoryController {
    constructor(private importListCategoryUseCase: ImportListCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        const { file } = req

        this.importListCategoryUseCase.execute(file)

        return res.send()
    }
}

export { ImportListCategoryController }