var http = require('http'),
    parse = require('url').parse,
    controllers = require('./controllers');

http.createServer(function(request, response) {
    var context = {
        request: request,
        response: response,
        url: parse(request.url, true)
    }
    try {
        controllers.apply.apply(context);
    } catch (e) {
        console.log(e);
        if (e === true) {
            response.writeHead(404);
            response.end();
        } else {
            response.writeHead(500);
            response.end();
        }
    }
}).listen(8000);
