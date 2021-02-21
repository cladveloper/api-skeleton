// Packages
import rethinkdb from "rethinkdb";
// Class
export default class RethinkDb{
    constructor(tableName){
        this.tableName = tableName;
        this.client = rethinkdb;
    }
    connect(db = "test", host = 'localhost', port = 28015, user = "admin", password = "", timeout = 20){
        if(!RethinkDb.connection){
            RethinkDb.connection = new Promise((resolve, reject) => {
                console.log(`Connecting Rethink DB in ${host}:${port}/${db}`);
                this.client.connect( {host, port, db, user, password, timeout}, function(err, conn) {
                    if (err) reject(err);
                    else resolve(conn);
                    console.log(err ? `Could not connect to Rethink DB` : `Succesfully connected to Rethink DB`);
                });
            })
        }
        return RethinkDb.connection;
    }

    getAll(){
        return new Promise((resolve, reject) => {
            this.connect()
            .then(conn => {
                this.client.table(this.tableName).run(conn, function(err, cursor) {
                    if(err) reject(err);
                    cursor.toArray(function(err, result){
                        if(err) reject(err);
                        resolve(result);
                    })
                });
            });
        })
    }

    getById(id = ""){
        return new Promise((resolve, reject) => {
            this.connect()
            .then(conn => {
                this.client.table(this.tableName).get(id).run(conn, function(err, result){
                    if(err) reject(err)
                    resolve(result);
                });
            })
        })
    }

    insert(data = []){
        return new Promise((resolve, reject) => {
            this.connect()
            .then(conn => {
                this.client.table(this.tableName).insert(data).run(conn, function(err, result){
                    if(err) reject(err)
                    resolve(result);
                });
            });
        })
    }
    
    update(filter, body){
        return new Promise((resolve, reject) => {
            this.connect()
            .then(conn => {
                this.client.table(this.tableName).filter(filter).update(body).run(conn, function(err, result){
                    if(err) reject(err)
                    resolve(result);
                });
            });
        });
    }

    delete(filter){
        return new Promise((resolve, reject) => {
            this.connect()
            .then(conn => {
                this.client.table(this.tableName).filter(filter).delete().run(conn, function(err, result){
                    if(err) reject(err)
                    resolve(result);
                });
            });
        });
    }
}