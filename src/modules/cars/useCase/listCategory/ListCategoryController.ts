import { Request, Response } from "express";
import { useContainer } from "typeorm";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { container } from "tsyringe"

class ListCategoryController {

    // constructor(private litCategoryUseCase: ListCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {

        const listCategoryUseCase = container.resolve(ListCategoryUseCase)

        const all = await listCategoryUseCase.execute();

        return res.json(all)
    }
}

export { ListCategoryController }