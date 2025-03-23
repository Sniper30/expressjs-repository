import {Request, Response, Router} from 'express'
import { UserService } from './user.service';
const router = Router();
export class UserController {
 constructor(private userService: UserService){}
 async getAll(req:Request, res: Response){
    res.json(await this.userService.getAll())
 }
 async createOne(req: Request,res: Response){
   await this.userService.createOne(req.body)
   res.end('klk')
 }

}



