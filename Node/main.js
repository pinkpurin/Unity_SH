var http = require("http"); //HTTP 모듈을 가져온다.

//서버 동작시키고 포트 8000번을 연다.
http.createServer(function (request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //웹페이지에 출력
    response.end('Hello World');

}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');