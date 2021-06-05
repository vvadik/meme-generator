function drawImage() {
    const context = getCanvasContext();
    const memeDivs = getMemeDivs();
    for (const div of memeDivs) {
        const textarea = div.querySelector('.userText');
        const sizeSelector = div.querySelector('.sizeSelector');
        const size = sizeSelector.querySelector('input').value;
        const colorPicker = div.querySelector('.colorPicker');
        const color = colorPicker.querySelector('input').value;

        drawTextArea(context, textarea, div.offsetLeft, div.offsetTop, size, color);
        div.remove();
    }
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
        ctx.fillText(lines[i], 0, i * fontSize);
    }
    ctx.restore();
}

function drawTextArea(context, textarea, x, y, fontSize, textColor) {
    const text = textarea.value;
    if (text.length === 0) {
        return;
    }
    drawString(context, text, x, y, textColor, 'Calibri', fontSize);
}