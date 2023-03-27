import dotenv from 'dotenv';
import Server from './models/server';

//configurar variables de entorno
dotenv.config()

const server = new Server ()

server.listen()
