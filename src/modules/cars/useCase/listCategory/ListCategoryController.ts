import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";


class ListCategoryController {

    constructor(private litCategoryUseCase: ListCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const all = await this.litCategoryUseCase.execute();

        return res.json(all)
    }
}

export { ListCategoryController }