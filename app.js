require('dotenv').config({path:'.env'});

const { Server } = require('./models/server.js');


const server = new Server();
server.listen();