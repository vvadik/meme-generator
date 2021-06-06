async function generateCard() {
    let UrlToImage = await getPhotoUrl() ///Путь до картинки
    const cardBlock = document.getElementById('cardBlock');
    const divCard = document.createElement('div');
    divCard.className = 'card text-white bg-dark mb-3';
    const img = document.createElement('img');
    img.src = UrlToImage;
    img.className = 'card-img-top';
    img.alt = UrlToImage;
    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';
    const h = document.createElement('h5');
    h.className = 'card-title';

    let imageName = await getPhotoName(UrlToImage)

    h.innerText = imageName;
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText = 'Create my own';
    button.addEventListener('click', function () {
        putOnCanvas(UrlToImage);
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -window.pageYOffset);
        }
    });
    divCard.id = imageName;
    divCard.appendChild(img);
    divCardBody.appendChild(h);
    divCardBody.appendChild(button);
    divCard.appendChild(divCardBody);
    cardBlock.appendChild(divCard);
}

async function getListPhotosNames() {
    let allPhotos = await fetch('./photos')
    let data = await allPhotos.text()
    data = data.slice(2, -2)  // убрали  [] из строки и пробелы
    data = data.replaceAll('"', '')  // убрали " из строки, получили только слова и ,
    data = data.split(',')  // создали массив, ура
    return data
}

async function putOnCanvas(UrlToImg) {
    const canvas = document.getElementById('img'),
        c = canvas.getContext("2d");
    const image = new Image();
    image.src = UrlToImg;
    canvas.width = image.width;
    canvas.height = image.height;
    c.drawImage(image, 0, 0);
}

async function getPhotoUrl() {
    let UrlToImage = await getListPhotosNames()
    let allCardsCount = document.querySelectorAll('.card')
    let currentCardIndex = allCardsCount.length % UrlToImage.length
    let neededImage = UrlToImage[currentCardIndex]
    neededImage = '/photo/' + neededImage
    return neededImage
}

async function getPhotoName(UrlToImage) {
    let imageName = UrlToImage.split('/');
    imageName = imageName[imageName.length - 1]
    imageName = imageName.split('.');
    imageName = imageName[0]
    return imageName
}

async function getBasicPictures(n) {
    for (let i = 0; i < n; i++) {
        await generateCard();
    }
}