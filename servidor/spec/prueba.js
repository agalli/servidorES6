var request = require("request");

var options = {
    method: 'GET',
    url: 'http://localhost:3000/',
    headers:
    {
        authorization: 'Basic c3BhZG1pbjphZG1pbg=='
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(response.statusCode);
});


/*var request = require("request");

var base_url = "http://localhost:3000/";

var options = {
  url: 'http://localhost:3000/',
  headers: {
    'User-Agent': 'request'
  }
};

request.get(base_url, function (error, response, body) {
    console.log("aca");
    console.log(response.statusCode);
    console.log(response.body);
});

var rest = require('rest');
var base_url = "http://localhost:3000/";

rest(base_url).then(function(response) {
    console.log('response: ', response);
});*/
