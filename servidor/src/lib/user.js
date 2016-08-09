import {db_connect} from './db_connect';

export class user {
    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass;
    }
    isValid() {
        let db=new db_connect();
        let resultado=db.getPersona(this.pass);
        console.log('el resultado '+resultado);
        if(resultado===true){
            console.log('en el true de user');
            return true;
        }else{
            console.log('en el false de user');
            return false;
        }
        
    }
}