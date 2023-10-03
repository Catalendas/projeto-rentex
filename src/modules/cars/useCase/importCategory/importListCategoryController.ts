import { Request, Response } from "express";
import { ImportListCategoryUseCase } from "./importListCategoryUseCase";
import { container } from "tsyringe"

class ImportListCategoryController {
    // constructor(private importListCategoryUseCase: ImportListCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        const { file } = req

        const importListCategoryUseCase = container.resolve(ImportListCategoryUseCase)

        importListCategoryUseCase.execute(file)

        return res.status(201).send()
    }
}

export { ImportListCategoryController }