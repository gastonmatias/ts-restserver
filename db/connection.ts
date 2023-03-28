//?https://sequelize.org/docs/v6/getting-started/
import { Sequelize } from "sequelize";

import dotenv from 'dotenv';
dotenv.config()

const db_name = process.env.DB_NAME!
const db_user = process.env.DB_USER!
const db_pass = process.env.DB_PASSWORD!

//* connecting to db with method 3: Passing parameters separately
const dbSequelize = new Sequelize(db_name, db_user, db_pass, {
    dialect: 'postgres'
});

//*  metodo 2: con uri
// const dbSequelize = new Sequelize(process.env.URI!,{
//   dialect: 'postgres'
// })

export default dbSequelize