import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import routes from './routes';

class App{
    constructor() {
        this.server = express();


        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: false }));
    }

    routes() {
        this.server.use(routes);
    }

}


export default new App().server;
