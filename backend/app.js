const Hapi = require('hapi')
const Boom = require('boom')

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mahasiswa"
});

const server = Hapi.server({
    port: 3000,
    host: '127.0.0.1'
});

 
server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {

        return 'Hello, world!';
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {

        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});


server.route({
    method: 'GET',
    path: '/async/{name}',
    async handler(request) {
        const connection = con.connect();
//        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
        try {
                const [rows, fields] = await con.query('select * from mahasiswa;')
                return rows
            } catch (err) {
                throw Boom.internal('Internal Mysql Error', err)
            }
        
    }
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();