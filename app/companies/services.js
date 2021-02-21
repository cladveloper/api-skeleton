// Imports
import rethinkDb from "../../lib/rethinkdb.js";
// Class
export default class CompanyService {
    constructor(){
        this.r = new rethinkDb("company");
    }
    getAll(){
        return this.r.getAll();
    }
    getById(id){
        return this.r.getById(id);
    }
    createOne(body = {}){
        body["createdDate"] = new Date().getTime();
        return this.r.insert([body]);
    }
    updateById(id = "", body = {}){
        body["updatedDate"] = new Date().getTime();
        return this.r.update(this.r.client.row("id").eq(id), body);
    }
    deleteById(id){
        return this.r.delete(this.r.client.row("id").eq(id));
    }
}