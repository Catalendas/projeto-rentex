import { Request, response, Response } from "express";
import { container } from "tsyringe";
import { UploadAvatarUseCase } from "./UploadAvatarUseCase";

class UploadAvatarController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user
        const avatar_file = req.file.filename

        const uploadAvatarUseCase = container.resolve(UploadAvatarUseCase)

        await uploadAvatarUseCase.execute({ user_id: id, avatar_file})
    
        return response.status(204).send()
    }
}

export { UploadAvatarController }