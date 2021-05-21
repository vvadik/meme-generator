const http = require('http');
const fs = require('fs');


let server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
});

// TODO: Прописать роутинг.
// TODO: Примеры который уже загружены поместить в /examples и брать по имени от туда
// TODO: Добавить кнопку для загрузки своей фотографии и тут же ее показать
// TODO: Пока без авторизации\пользователей и тд

// TODO: После выбора или загрузки картинки уметь переходить на страничку с редактингом
server.on('request', (req, res) => {
    switch (req.url) {
        case '/':
            res.end(fs.readFileSync('index.html'));
            //При каждом запросе файл будет считываться заново, а значит можно редачить не перезапуская сервер
            return;

        case '/photo':
            res.end(fs.readFileSync(`./photo/824439.700xp.jpg`));
            return;

        default:
            res.writeHead(404);
            res.end();
            return;
    }
});

server.listen(800, 'localhost');