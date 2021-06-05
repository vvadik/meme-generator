const express = require('express');
// import get_pho from './Card.js'

const server = express();

// TODO: Прописать роутинг.
// TODO: Примеры который уже загружены поместить в /examples и брать по имени от туда
// TODO: Добавить кнопку для загрузки своей фотографии и тут же ее показать
// TODO: Пока без авторизации\пользователей и тд

// TODO: После выбора или загрузки картинки уметь переходить на страничку с редактингом
server.use(express.static('static'));
server.use('/photo', express.static('photo'));
server.use('/photos', function(request, response){
    let fs = require('fs');
    let files = fs.readdirSync('./photo/');
    console.log(files)
    response.send(files)
});
server.listen(800, 'localhost');