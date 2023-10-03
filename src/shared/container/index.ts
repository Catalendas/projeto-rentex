import { container } from "tsyringe"

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificatiosnRepository"

import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificatitonsRepository"
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"
import { UserRepository } from "../../modules/user/repositories/implementations/UserRepository"
import { IUsersRepository } from "../../modules/user/repositories/IUserRepository"

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)

container.register<IUsersRepository>(
    "UserRepository",
    UserRepository
)