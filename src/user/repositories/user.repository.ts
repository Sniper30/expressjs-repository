import AppError from "../../config/error/app.error";
import db from "../../databases/mysql/mysql.config";
import { DateParser } from "../../utils/date";
import { IUserRepository } from "./IUserRepository";


export class UserRepository implements IUserRepository {
    constructor(){}

    async createOne(user: UserEntity): Promise<UserEntity> {
        console.log(DateParser(new Date()))
        const _user = `"${user.firstname}","${user.lastname}","${user.email}","${user.password}",${user.is_admin},"${DateParser(new Date())}"`
        return await db.query(`INSERT INTO users (first_name,last_name,email,password,is_admin,created_at) VALUES (${_user})`)
    }

    async findOne(id: number){
        return await db.query(`SELECT * FROM users where id=${id}`)
    }
    async findAll(){

    const result = await db.query('SELECT * FROM users limit 5')
        if(!result) throw new AppError('No results') 
        return result[0]
     
    }
    deleteOne(): UserEntity {
        throw new Error("Method not implemented.");
    }
    updateOne(): UserEntity {
        throw new Error("Method not implemented.");
    }
    
}