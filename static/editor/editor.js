function getCanvas() {
    return document.getElementById('cnv');
}

function getCanvasContext() {
    return getCanvas().getContext('2d');
}

function loadFile(doc) {
    const canvas = getCanvas()
    const context = getCanvasContext();
    const file = doc.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;
        img.addEventListener('load', function() {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        });
    }
    reader.readAsDataURL(file);
}

function downloadMeme() {
    const canvas = getCanvas();
    const link = document.createElement("a");
    link.download = "download";
    link.href = canvas.toDataURL('image/png');
    link.click();
}

function getMemeDivs() {
    return document.querySelectorAll('.memeText');
}

function getNextMemeTextAreaId() {
    const existingIds = Array.from(getMemeDivs().values()).map(d => parseInt(d.id)).sort();
    let idToCheck = 0;
    for (const id of existingIds) {
        if (id !== idToCheck) {
            break;
        }
        idToCheck++;
    }
    return idToCheck;
}

async function main() {
    await getBasicPictures();
    const canvas = getCanvas();


    const context = getCanvasContext();
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);

    canvas.addEventListener('dblclick', function(event) {
        createMemeTextArea(event.x, event.y);
    });
}