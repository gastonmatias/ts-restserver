//?https://sequelize.org/docs/v6/getting-started/

import { Sequelize } from "sequelize";

// connecting to db with method 3: Passing parameters separately
const dbSequelize = new Sequelize('tsrestserver', 'postgres', 'oracle', {
    host: 'localhost',
    dialect: 'postgres'
  });

export default dbSequelize