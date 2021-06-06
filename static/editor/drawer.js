function drawImage() {
    const context = getCanvasContext();
    const memeDivs = getMemeDivs();
    for (const div of memeDivs) {
        const textarea = div.querySelector('.userText');
        const sizeSelector = div.querySelector('.sizeSelector');
        const size = sizeSelector.querySelector('input').value;
        const colorPicker = div.querySelector('.colorPicker');
        const color = colorPicker.querySelector('input').value;
        let x = div.offsetLeft;
        let y = div.offsetTop;

        const clientRects = context.canvas.getClientRects()[0];
        const scaleX = context.canvas.width / clientRects.width;
        const scaleY = context.canvas.height / clientRects.height;

        x -= context.canvas.offsetLeft;
        y -= context.canvas.offsetTop;
        context.save();
        context.scale(scaleX, scaleY);
        drawTextArea(context, textarea, x, y, size, color);
        context.restore();
        div.remove();
    }
}

function drawString(ctx, text, posX, posY, textColor = '#000000', font = "'serif'", fontSize = 16) {
    const lines = text.split('\n');
    ctx.save();
    ctx.font = fontSize + 'px ' + font;
    ctx.fillStyle = textColor;
    ctx.translate(posX, posY);
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