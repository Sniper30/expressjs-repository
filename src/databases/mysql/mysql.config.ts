import * as mysql from 'mysql2/promise'
import { envs } from '../../config/envs.config';


export class Mysql2DB {
  static instance: Mysql2DB | null;
  public connection;
  constructor(){
    if(Mysql2DB.instance){
      return Mysql2DB.instance
    }
    Mysql2DB.instance = this;
    this.connection = mysql.createPool({
      host: envs.db_host,
      user: envs.db_user,
      password: envs.db_root_password,
      database: envs.db_name,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }
  async query(sql: string){
    const connection = await this.connection?.getConnection();
    const res = await connection?.execute(sql) as any
    connection?.release();
    return res;
  }
}
const db = new Mysql2DB();
export default db;