var request = require("request");

var options = {
    method: 'GET',
    url: 'http://localhost:3000/',
    headers:
    {
        authorization: 'Basic c3BhZG1pbjphZG1pbg=='
    }
};


describe("GET /", function () {
    it("returns status code 200", function () {
        request(options, function (error, response, body) {
            console.log("aca");
            expect(response.statusCode).toBe(200);
        });
    });
});
