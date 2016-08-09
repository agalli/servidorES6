import {db_connect} from './db_connect';

export class user {
    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass;
    }
    isValid() {
        let db=new db_connect();
        return db.getPersona(this.pass);        
    }
}