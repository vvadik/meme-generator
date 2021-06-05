///["ManWoman.jpg","Nike.jpg","yoda.jpg"]

async function generateCard(imageSource){
    let allPhotos = await fetch(imageSource)
    let data = await allPhotos.text()
    data = data.slice(2, -2)
    data = data.replaceAll('"', '')
    data = data.split(',')

    let allCardsCount = document.querySelectorAll('.card')
    allCardsCount = allCardsCount.length % data.length

    imageSource = data[allCardsCount]
    imageSource = '/photo/' + imageSource
    

    const cardBlock = document.getElementById('cardBlock');
    const divCard = document.createElement('div');
    divCard.className = 'card text-white bg-dark mb-3';
    const img = document.createElement('img');
    img.src = imageSource;
    img.className = 'card-img-top';
    img.alt = imageSource;
    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';
    const h = document.createElement('h5');
    h.className = 'card-title';

    let imageName = imageSource.split('/');
    imageName = imageName[imageName.length - 1]
    imageName = imageName.split('.');
    imageName = imageName[0]

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