function generateCard(photoUrl) {
    const cardBlock = document.getElementById('cardBlock');
    const divCard = document.createElement('div');
    divCard.className = 'card text-white bg-dark mb-3';
    const img = document.createElement('img');
    img.src = photoUrl;
    img.className = 'card-img-top';
    img.alt = photoUrl;
    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';
    const h = document.createElement('h5');
    h.className = 'card-title';

    const imageName = getPhotoName(photoUrl);

    h.innerText = imageName;
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText = 'Create my own';
    button.addEventListener('click', async function () {
        await putOnCanvas(photoUrl);
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
    let response = await fetch('./photos');
    if (response.ok) {
        return await response.json();
    } else {
        return [];
    }
}

async function putOnCanvas(UrlToImg) {
    const context = getCanvasContext();
    const image = new Image();
    image.src = UrlToImg;
    context.canvas.width = image.width;
    context.canvas.height = image.height;
    context.drawImage(image, 0, 0);
}

function getPhotoName(UrlToImage) {
    const path = UrlToImage.split('/');
    return path[path.length - 1]
        .split('.')[0];
}

async function getBasicPictures() {
    const photos = await getListPhotosNames();
    for (const photoUrl of photos) {
        generateCard('/photo/' + photoUrl);
    }
}