import { Router } from "express"
import { authenticateRouter } from "./authenticate.routes"
import { categoriesRouter } from "./categories.routes"
import { specificationRouter } from "./specifications.routes"
import { userRouter } from "./users.routes"

export { Router } from "express"

const router = Router()

router.use("/categories", categoriesRouter)
router.use("/specification", specificationRouter)
router.use("/users", userRouter)
router.use(authenticateRouter)

export { router }