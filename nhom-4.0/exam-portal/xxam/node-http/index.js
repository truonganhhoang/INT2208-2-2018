const http = require('http')

const hostname = 'localhost';
const port = 3000;

//setup server
const server = http.createServer((req,res) => {
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><head><meta charset ="utf-8"></head><body><h1>Bài của bạn đã được nộp</h1></body></html>');

});

server.listen(port , hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`); 
});