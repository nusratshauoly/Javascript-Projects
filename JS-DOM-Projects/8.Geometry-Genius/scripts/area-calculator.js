// --------- triangle ----------
function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    // triangle area
    const area = 0.5 * base * height;

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    // call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
    addToCalculationEntry('Triangle', area);
}


// --------------- rectangle -------------
function calculateRectangleArea() {
    // get rectangle width value
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    // get rectangle length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    // 2. validate input: width and length : data validation : input e number chara onno kichu na likhar jonno . way 2: using (isNaN)
    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        // alert show korar por kono output na dekhanor jonno (return) korbo.
        return;
    }

    // rectangle area
    const area = width * length;

    // show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;  

    // call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
    addToCalculationEntry('Rectangle', area);
}


// -------------------- Parallelogram ---------------------
function calculateParallelogramArea() {
    // get Parallelogram base value
    const baseField = document.getElementById('parallelogram-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    // get Parallelogram height value
    const heightField = document.getElementById('parallelogram-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    // validate input: base and height : data validation : input e number chara onno kichu na likhar jonno . way 2: using (isNaN)
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        // alert show korar por kono output na dekhanor jonno (return) korbo.
        return;
    }

    // rectangle area
    const area = base * height;

    // show rectangle area
    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = area;

    // call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
    addToCalculationEntry('Parallelogram', area);

}