"use strict";
//?https://sequelize.org/docs/v6/getting-started/
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// connecting to db with method 3: Passing parameters separately
const dbSequelize = new sequelize_1.Sequelize('tsrestserver', 'postgres', 'oracle', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = dbSequelize;
//# sourceMappingURL=connection.js.map