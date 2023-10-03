import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { container } from "tsyringe"


class ListSpecificationController {
    // constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {

        const listSpecificationUseCase = container.resolve(ListSpecificationUseCase)

        const all = await listSpecificationUseCase.execute()
        return res.json(all)
    }
}

export { ListSpecificationController }