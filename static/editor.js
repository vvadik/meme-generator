
// теперь мы можем импортировать файл и editor.js вернет нам функцию editor
function getCanvas() {
    return document.getElementById('cnv');
}

function getCanvasContext() {
    return getCanvas().getContext('2d');
}

function onfill(doc)
{
    const canvas = getCanvas()
    const context = getCanvasContext();
    const file=doc.files[0];
    const reader = new FileReader();
    reader.onload = function(event)
    {
        const img = new Image();
        img.src = event.target.result;
        img.addEventListener('load', function()
        {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
        });
    }
    reader.readAsDataURL(file);
}

function get()
{
    const canvas = getCanvas();
    const link = document.createElement("a");
    link.download = "download";
    link.href = canvas.toDataURL('image/png');
    link.click();
}