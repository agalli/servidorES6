import knex from 'knex';
import bookshelf from 'bookshelf';

export class db_connect {
    constructor() {
        console.log('en el constructor de db_connect');
        this.knex1 = knex({
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'root',
                password: 'rootpass',
                database: 'mydb',
                charset: 'utf8'
            }
        });

        const bookshelf1 = bookshelf(this.knex1);

        this.Personas = bookshelf1.Model.extend({
            tableName: 'Personas',
        });



    }
    getPersona(ci) {
        return this.Personas.where('perCi', ci).fetch().then(user => {
            console.log('el user ' + user);
            if (user !== null) {
                let usuario = user.toJSON();
                console.log(usuario.perCi);
                console.log('en el true de db_connect');
                this.knex1.destroy();
                return true;
            } else {
                console.log('en el false de db_connect');
                this.knex1.destroy();
                return false;
            }
        }).catch(err => {
            console.error(err);
            return false;
        });
    }
}