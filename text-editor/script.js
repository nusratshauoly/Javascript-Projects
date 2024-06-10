function boldText() {
    const textArea = document.getElementById('textArea');
    textArea.style.fontWeight = "bold";
}

function italicText() {
    const textArea = document.getElementById('textArea');
    textArea.style.fontStyle = "italic";
}

function leftAlignText() {
    const textArea = document.getElementById('textArea');
    textArea.style.textAlign = "left";
}

function centerAlignText() {
    const textArea = document.getElementById('textArea');
    textArea.style.textAlign = "center";
}

function rightAlignText() {
    const textArea = document.getElementById('textArea');
    textArea.style.textAlign = "right";
}

function upperText() {
    const textArea = document.getElementById('textArea');
    textArea.style.textTransform = "uppercase";
}

function lowerText() {
    const textArea = document.getElementById('textArea');
    textArea.style.textTransform = "lowercase";
}

function capitalText() {
    const textArea = document.getElementById('textArea');
    textArea.style.textTransform = "capitalize";
}

function changeColor(color) {
    const textArea = document.getElementById("textArea");
    textArea.style.color = color;
}

function changeBgColor(color) {
    const textArea = document.getElementById("textArea");
    textArea.style.backgroundColor = color;
}

function clearText() {
    textArea.style.fontWeight = 'normal';
    textArea.style.fontStyle = 'normal';
    textArea.style.textAlign = 'left';
    textArea.style.textTransform = 'capitalize';
    textArea.value = " ";
    textArea.style.color = ''; // Reset color to default
    textArea.style.backgroundColor = ''; // Reset background color to default
}