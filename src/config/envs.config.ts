import * as joi from "joi";
import "dotenv/config";
interface EnvVars {
    DB_HOST:string,
    DB_USER: string,
    DB_ROOT_PASSWORD: string,
    DB_NAME: string,
    APP_PORT: number
}
const schema = joi.object({
    DB_HOST: joi.string().required(),
    DB_USER: joi.string().required(),
    DB_ROOT_PASSWORD: joi.string().required(),
    DB_NAME: joi.string().required(),
    APP_PORT: joi.number().required()

}).unknown(true);

const {error,value} = schema.validate(process.env);

if(error) throw new Error("There is an error with the enviroment variables");

const envvars: EnvVars = {
    DB_HOST: value.DB_HOST,
    DB_USER: value.DB_USER,
    DB_ROOT_PASSWORD: value.DB_ROOT_PASSWORD,
    DB_NAME: value.DB_NAME,
    APP_PORT: value.APP_PORT
}

export const envs = {
    db_host: envvars.DB_HOST,
    db_user: envvars.DB_USER,
    db_root_password: envvars.DB_ROOT_PASSWORD,
    db_name: envvars.DB_NAME,
    app_port: envvars.APP_PORT
}