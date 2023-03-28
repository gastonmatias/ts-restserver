"use strict";
//? https://sequelize.org/docs/v6/core-concepts/model-instances/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
* As you already know, a model is an ES6 class.
* An instance of the class represents one object from that model
* (which maps to one row of the table in the database).
! This way, model instances are DAOs (Data Object Transfer)
*/
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define("user", {
    name: sequelize_1.DataTypes.TEXT,
    email: sequelize_1.DataTypes.STRING,
    status: sequelize_1.DataTypes.SMALLINT
}, {
    tableName: 'users'
});
exports.default = User;
//# sourceMappingURL=user.js.map