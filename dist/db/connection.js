"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//?https://sequelize.org/docs/v6/getting-started/
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASSWORD;
//* connecting to db with method 3: Passing parameters separately
const dbSequelize = new sequelize_1.Sequelize(db_name, db_user, db_pass, {
    dialect: 'postgres'
});
//*  metodo 2: con uri
// const dbSequelize = new Sequelize(process.env.URI!,{
//   dialect: 'postgres'
// })
exports.default = dbSequelize;
//# sourceMappingURL=connection.js.map