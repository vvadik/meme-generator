
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

function drawString(ctx, text, posX, posY, textColor, font, fontSize) {
    const lines = text.split("\n");
    //if (!rotation) rotation = 0;
    if (!font) font = "'serif'";
    if (!fontSize) fontSize = 16;
    if (!textColor) textColor = '#000000';
    ctx.save();
    ctx.font = fontSize + "px " + font;
    ctx.fillStyle = textColor;
    ctx.translate(posX, posY);
    //ctx.rotate(rotation * Math.PI / 180);
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i],0, i*fontSize);
    }
    ctx.restore();
}

function drawTextArea(context, textarea) {
    const text = textarea.value;
    if(text.length === 0)
    {
        return;
    }
    drawString(context, text, textarea.offsetLeft, textarea.offsetTop, 'yellow', 'Calibri', 72);
}

function main() {
    const canvas = getCanvas();
    const context = getCanvasContext();
    const myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', function(e)
    {
        const textareas = document.querySelectorAll('.userText');
        console.log(textareas);
        for (const textarea of textareas) {
            drawTextArea(context, textarea);
            textarea.remove();
        }

        e.preventDefault();
    });
    canvas.addEventListener('dblclick', function (event) {
        console.log('click');
        const newTextArea = document.createElement('textarea');
        newTextArea.className = 'userText';
        console.log(`x: ${event.offsetX}`);
        console.log(`y: ${event.offsetY}`);
        newTextArea.style.left = event.offsetX.toString() +'px';
        newTextArea.style.top = event.offsetY.toString() + 'px';
        newTextArea.style.zIndex = '101';
        const form = document.getElementById('myForm');
        form.appendChild(newTextArea);
    });
}