import { Router } from "express";
import { UserRepository } from "../repositories/user.repository";
import { UserService } from "../user.service";
import { UserController } from "../user.controller";
import { Mysql2DB } from "../../databases/mysql/mysql.config";
const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/',userController.getAll.bind(userController) );
router.post('/',userController.createOne.bind(userController))
export const UserRouter = router;