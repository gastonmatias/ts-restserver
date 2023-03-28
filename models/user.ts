//? https://sequelize.org/docs/v6/core-concepts/model-instances/

/* 
* As you already know, a model is an ES6 class. 
* An instance of the class represents one object from that model 
* (which maps to one row of the table in the database). 
! This way, model instances are DAOs (Data Object Transfer)
*/

import {DataTypes} from 'sequelize'
import dbSequelize from '../db/connection'

const User = dbSequelize.define("user", {
        name: DataTypes.TEXT,
        email: DataTypes.STRING,
        status: DataTypes.SMALLINT
    },
    {
        tableName: 'users'
    }
);

export default User