import * as express from "express";
import { UserRouter } from "./user/router/user.router";
import { envs } from "./config/envs.config";

const app = express();
app.use(express.json());
app.use('/user',UserRouter);
app.listen(envs.app_port,()=> console.log('app running on port: '+ envs.app_port));


