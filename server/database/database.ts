import knex, {Knex} from "knex";
import dotenv from 'dotenv'


const knexConfig: Knex.Config = {
    client: "mysql2",
    connection:{
        host: "172.17.0.2",
        port: 3306,
        user: "root",
        password: process.env.DB_PASSWORD,
        database: "myanimes"
    }
}


    const Connection = knex(knexConfig);
    
export default Connection;