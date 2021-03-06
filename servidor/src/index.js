import express from 'express';
import auth from 'basic-auth';
import {user} from './lib/user';

const app = express();

let validar_usuario = (req, res, next) => {
    console.log('antes de el get');
    let u = auth(req);
    if (u) {
        let usuario = new user(u.name, u.pass);
        console.log('el nombre %s el pass %s', usuario.nombre, usuario.pass);
        usuario.isValid(u.pass).then(result => {
            if (result) {
                next();
            } else {
                res.statusCode = 401;
                res.send('usuario invalido');
            }
        });
    } else {
        console.log('falta usuario');
        res.statusCode = 403;
        res.send('falta usuario');
    }

};


app.get('/', validar_usuario, (req, res) => {
    res.statusCode = 200;
    res.send('usuario valido');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    host = (host === '::' ? 'localhost' : host);
    var port = server.address().port;

    console.log('listening at http://%s:%s', host, port);
});