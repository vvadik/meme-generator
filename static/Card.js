async function generateCard(){
    let listImages = await getPhotoUrl()

    const cardBlock = document.getElementById('cardBlock');
    const divCard = document.createElement('div');
    divCard.className = 'card text-white bg-dark mb-3';
    const img = document.createElement('img');
    img.src = listImages;
    img.className = 'card-img-top';
    img.alt = listImages;
    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';
    const h = document.createElement('h5');
    h.className = 'card-title';

    let imageName = await getPhotoName(listImages)

    h.innerText = imageName;
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText = 'Create my own';
    button.addEventListener('click', function () {});

    divCard.appendChild(img);
    divCardBody.appendChild(h);
    divCardBody.appendChild(button);
    divCard.appendChild(divCardBody);
    cardBlock.appendChild(divCard);
}

async function getListPhotosNames(){
    let allPhotos = await fetch('./photos');
    let data = await allPhotos.text()
    data = data.slice(2, -2)  // убрали  [] из строки и пробелы
    data = data.replaceAll('"', '')  // убрали " из строки, получили только слова и ,
    data = data.split(',')  // создали массив, ура
    return data
}

async function getPhotoUrl(){
    let listImages = await getListPhotosNames()
    console.log(listImages)
    let allCardsCount = document.querySelectorAll('.card')
    let currentCardIndex = allCardsCount.length % listImages.length
    let neededImage = listImages[currentCardIndex]
    neededImage = '/photo/' + neededImage
    return neededImage
}

async function getPhotoName(listImages){
    console.log(listImages)
    let imageName = listImages.split('/');
    imageName = imageName[imageName.length - 1]
    imageName = imageName.split('.');
    imageName = imageName[0]
    return imageName
}