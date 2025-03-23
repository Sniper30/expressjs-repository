
import { UserRepository } from "./repositories/user.repository";


export class UserService {

    constructor(private userRepository: UserRepository){}
    
     getAll(): Promise<UserEntity | undefined>{
        return this.userRepository.findAll()
    }
    async createOne(user: UserEntity){
       const userCreated = await this.userRepository.createOne(user);
       return userCreated;
    }
}