import express, {Application} from 'express'
import userRoutes from '../routes/users.routes';
import cors from 'cors'
import dbSequelize from '../db/connection';

class Server {
    
    private app:  Application;
    private port: string;
    private apiPaths ={
        users: '/api/users'
    }

    constructor () {
        this.app  = express();
        this.port = process.env.PORT || '8000'

        this.middlewares()

        // definicion de rutas
        this.routes();

        this.dbConnection()
    }

    async dbConnection (){
        try {
            await dbSequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    middlewares () {
        //cors
        this.app.use(cors()) 
        
        //lectura del body
        this.app.use(express.json()) //para autoparsear lo mandado x body

        //carpeta publica
        this.app.use(express.static('public'))//para servir static files
    }
    
    routes () {
        this.app.use(this.apiPaths.users, userRoutes)
    }
    
    listen () {
        this.app.listen(this.port, () => {
            console.log('Server running on port '+ this.port);
        })
    }


}

export default Server;