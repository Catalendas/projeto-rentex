import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase"

class CreateUserController {

    async handle(req: Request, res: Response) {
        const { name, driver_license, email, password } = req.body

        const createCategoryUseCase = container.resolve(CreateUserUseCase)

        await createCategoryUseCase.execute({ name, driver_license, email, password })

        return res.status(201).send()
    }
}

export { CreateUserController }