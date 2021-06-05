function createMemeTextArea(offsetX, offsetY) {
    const div = document.createElement('div');
    div.className = 'memeText';
    div.id = getNextMemeTextAreaId().toString();

    const closeButton = createCloseButton();
    const sizeSelector = createSizeSelector(8, 144);
    const colorPicker = createColorPicker();

    const newTextArea = document.createElement('textarea');
    newTextArea.className = 'userText';
    // newTextArea.addEventListener('blur', function () {
    //     sizeSelector.style.display = 'none';
    //     colorPicker.style.display = 'none';
    // });
    // div.addEventListener('focusin', function () {
    //     sizeSelector.style.display = 'inherit';
    //     colorPicker.style.display = 'inherit';
    // })
    newTextArea.autofocus = true;
    console.log(`x: ${offsetX} : ${offsetY}`);

    div.style.left = offsetX.toString() + 'px';
    div.style.top = offsetY.toString() + 'px';
    const canvas = document.getElementById('cnv');
    div.appendChild(newTextArea);
    div.appendChild(closeButton);
    div.appendChild(sizeSelector);
    div.appendChild(colorPicker);

    canvas.after(div);
}

function createCloseButton() {
    const button = document.createElement('button');
    button.textContent = 'x';
    button.type = 'button';
    button.className = 'removeMemeTextButton';
    button.addEventListener('click', function (evt) {
        button.parentElement.remove();
    });

    return button;
}

function createSizeSelector(minSize, maxSize, defaultSize = 16) {
    const div = document.createElement('div');
    div.className = 'sizeSelector';

    const label = document.createElement('label');
    label.className = 'sizeLabel';
    label.htmlFor = 'textSize';
    label.textContent = `Size: ${defaultSize}`;
    const onChangeRange = function (event) {
        label.textContent = `Size: ${event.target.value}`;
    }

    const input = document.createElement('input');
    input.type = 'range';
    input.min = minSize.toString();
    input.max = maxSize.toString();
    input.step = '1';
    input.name = 'textSize';
    input.value = defaultSize.toString();
    input.addEventListener('input', onChangeRange);
    input.addEventListener('change', onChangeRange);

    div.appendChild(input);
    div.appendChild(label);

    return div;
}

function createColorPicker(defaultColor = 'black') {
    const div = document.createElement('div');
    div.className = 'colorPicker';

    const label = document.createElement('label');
    label.className = 'colorLabel';
    label.htmlFor = 'color';
    label.textContent = 'Color';

    const input = document.createElement('input');
    input.type = 'color';
    input.name = 'color';
    input.value = defaultColor;

    div.appendChild(input);
    div.appendChild(label);

    return div;
}