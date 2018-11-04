const Hapi = require('hapi')
const Boom = require('boom')
var qs    = require('querystring');
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mahasiswa"
});
 

const launchServer = async function() {
    const clientOpts = {
        settings: 'mysql://root@127.0.0.1/mahasiswa',
        decorate: true
    }
    const server = Hapi.Server({ host:"127.0.0.1", 
                                 port: 3000,
                                 routes: { cors: { origin: 'ignore' } } 
                               })
 
    await server.register({
        plugin: require('hapi-mysql2'),
        options: clientOpts
    })
 
    server.route({
        method: 'GET',
        path: '/mahasiswa',
        async handler(request) {
            const pool = request.mysql.pool
 
            try {
                const [rows, fields] = await pool.query('select * from mahasiswa;')
                return rows
            } catch (err) {
                throw Boom.internal('Internal Mysql Error', err)
            }
        },
        
    })
    
    server.route({
        method: 'GET',
        path: '/hello',
        handler(request) {
            return {hello:'world'};
        }
    })
    
    server.route({
        method: 'POST',
        path: '/mahasiswa',
        async handler(request) {
            const pool = request.mysql.pool
            const payload = request.payload
            try {
                let npm    = payload.npm;
                let nama   = payload.nama;
                let alamat = payload.alamat;
                let query = "INSERT INTO mahasiswa (npm,nama_mhs,alamat) VALUES ('"+npm+"', '"+nama+"','"+alamat+"')";
                const [rows, fields] = await pool.query(query);
                return rows
            } catch (err) {
                throw Boom.internal('Internal Mysql Error', err)
            }
        }
    })
     
    server.route({
        method: 'PUT',
        path: '/mahasiswa/{npm}',
        async handler(request) {
            const pool = request.mysql.pool
            const payload = request.payload
            try {
                let npm    = request.params.npm;
                let nama   = payload.nama;
                let alamat = payload.alamat;
                let query = "UPDATE `mahasiswa` SET `nama_mhs` = '"+nama+"', `alamat` = '"+alamat+"' WHERE `mahasiswa`.`npm` = '"+npm+"'";
                const [rows, fields] = await pool.query(query)
                return rows
            } catch (err) {
                throw Boom.internal('Internal Mysql Error', err)
            }
        }
    })
    
     server.route({
        method: 'DELETE',
        path: '/mahasiswa/{npm}',
        async handler(request) {
            const pool = request.mysql.pool
            const payload = request.payload
            try {
                let npm    = request.params.npm;
                let query  =  "DELETE FROM `mahasiswa` WHERE `mahasiswa`.`npm` = '"+npm+"'";
                const [rows, fields] = await pool.query(query)
                return rows
            } catch (err) {
                throw Boom.internal('Internal Mysql Error', err)
            }
        }
    })
    
     
    server.route({
        method: 'GET',
        path: '/mahasiswa/{npm}',
        async handler(request) {
            const pool = request.mysql.pool
            try {
                let query  = 'select * from mahasiswa where npm = "'+request.params.npm+'"';
                const [rows, fields] = await pool.query(query)
                return rows
            } catch (err) {
                throw Boom.internal('Internal Mysql Error', err)
            }
        }
    })
 
    await server.start()
    console.log(`Server started at ${server.info.uri}`)
}
 
launchServer().catch(err => {
    console.error(err)
    process.exit(1)
})