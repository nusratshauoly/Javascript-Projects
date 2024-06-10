function boldText() {
    document.getElementById('textArea').style.fontWeight = "bold";
}

function italicText() {
    document.getElementById('textArea').style.fontStyle = "italic";
}

function leftAlignText() {
    document.getElementById('textArea').style.textAlign = "left";
}

function centerAlignText() {
    document.getElementById('textArea').style.textAlign = "center";
}

function rightAlignText() {
    document.getElementById('textArea').style.textAlign = "right";
}

function upperText() {
    document.getElementById('textArea').style.textTransform = "uppercase";
}

function lowerText() {
    document.getElementById('textArea').style.textTransform = "lowercase";
}

function capitalText() {
    document.getElementById('textArea').style.textTransform = "capitalize";
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
    document.getElementById('textArea').style.fontWeight = 'normal';
    document.getElementById('textArea').style.fontStyle = 'normal';
    document.getElementById('textArea').style.textAlign = 'left';
    document.getElementById('textArea').style.textTransform = 'capitalize';
    document.getElementById('textArea').value = " ";
    document.getElementById('text-color').style.color = ''; // Reset color to default
    document.getElementById('bg-color').style.backgroundColor = ''; // Reset background color to default
}