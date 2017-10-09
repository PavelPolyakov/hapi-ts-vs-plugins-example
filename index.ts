import {Server} from 'hapi';

const server : Server = new Server();

console.log(server.version);


server.some_server_method(42);

server.plugins.
