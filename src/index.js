import express from 'express';
import auth from 'basic-auth';

const app=express();

let validar_usuario=(req, res, next)=> {
  console.log("antes de el get");
  let user=auth(req);
  console.log('el nombre %s el pass %s', user.name, user.pass);
  next();
}


app.get('/', validar_usuario,  (req, res)=> {
    res.send('hello world es6');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;
 
  console.log('listening at http://%s:%s', host, port);
});