const express = require('express');

const server = express();
server.use(express.static('static'));
server.use('/photo', express.static('photo'));
server.use('/photos', function(request, response){
    let fs = require('fs');
    let files = fs.readdirSync('./photo/');
    console.log(files)
    response.send(files)
});

server.listen(800, 'localhost');