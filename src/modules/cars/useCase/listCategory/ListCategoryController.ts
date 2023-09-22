import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


class ListCategoryController {

    constructor(private litCategoryUseCase: ListCategoryUseCase) {}

    handle(req: Request, res: Response): Response {
        const all = this.litCategoryUseCase.execute();

        return res.json(all)
    }
}

export { ListCategoryController }