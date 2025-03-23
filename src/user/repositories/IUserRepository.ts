//casos de uso
export interface IUserRepository {
    createOne(user: UserEntity): Promise<UserEntity>,
    findAll(): Promise<UserEntity[] | undefined>,
    findOne(id: number): Promise<UserEntity | null>,
    deleteOne(): UserEntity,
    updateOne(): UserEntity
}