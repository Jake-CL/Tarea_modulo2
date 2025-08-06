import { Connection } from "pg";

export default {
    client : 'pg',
    Connection: {
        host: process.env.POSTGRESDB_HOST || 'localhost',
       port: process.env.POSTGRESDB_LOCAL_PORT || 5432,
       user: process.env.POSTGRESDB_USER || 'ash',
       password: process.env.POSTGRESDB_PASS || 'paleta',
        datebase: process.env.POSTGRESDB_DATABASE || 'localhost', 
    }
}