// first row area calculator in a details way (can be used in reusable way, just to experience both type ofway)------------------------- area calculation using detailed way -----------------

// --------- triangle ----------
function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    baseField.value = '';

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    heightField.value = '';

    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }

    // triangle area
    const area = 0.5 * base * height;

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

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

    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return;
    }

    // rectangle area
    const area = width * length;

    // show rectangle area
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;  

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

    if (isNaN(base) || isNaN(height)) {
        alert('Please insert a number');
        return;
    }

    // rectangle area
    const area = base * height;

    // show rectangle area
    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Parallelogram', area);

}



// ----------------------- code with comments -----------------------


// // first row area calculator in a details way (can be used in reusable way, just to experience both type ofway)------------------------- area calculation using detailed way -----------------

// // --------- triangle ----------
// function calculateTriangleArea() {
//     // get triangle base value
//     const baseField = document.getElementById('triangle-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);
//     baseField.value = '';

//     // get triangle height value
//     const heightField = document.getElementById('triangle-height');
//     const heightValueText = heightField.value;
//     const height = parseFloat(heightValueText);
//     heightField.value = '';

//     // validate input: width and length : data validation : input e number chara onno kichu na likhar jonno . way 2: using (isNaN)
//     if (isNaN(base) || isNaN(height)) {
//         alert('Please insert a number');
//         // alert show korar por kono output na dekhanor jonno (return) korbo.
//         return;
//     }

//     // triangle area
//     const area = 0.5 * base * height;

//     // show triangle area
//     const areaSpan = document.getElementById('triangle-area');
//     areaSpan.innerText = area;

//     // from{reusable-function.js => function addToCalculationEntry(areaType, area)} call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
//     addToCalculationEntry('Triangle', area);
// }


// // --------------- rectangle -------------
// function calculateRectangleArea() {
//     // get rectangle width value
//     const widthField = document.getElementById('rectangle-width');
//     const widthValueText = widthField.value;
//     const width = parseFloat(widthValueText);

//     // get rectangle length value
//     const lengthField = document.getElementById('rectangle-length');
//     const lengthValueText = lengthField.value;
//     const length = parseFloat(lengthValueText);

//     // 2. validate input: width and length : data validation : input e number chara onno kichu na likhar jonno . way 2: using (isNaN)
//     if (isNaN(width) || isNaN(length)) {
//         alert('Please insert a number');
//         // alert show korar por kono output na dekhanor jonno (return) korbo.
//         return;
//     }

//     // rectangle area
//     const area = width * length;

//     // show rectangle area
//     const areaSpan = document.getElementById('rectangle-area');
//     areaSpan.innerText = area;  

//     // from{reusable-function.js => function addToCalculationEntry(areaType, area)} call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
//     addToCalculationEntry('Rectangle', area);
// }


// // -------------------- Parallelogram ---------------------
// function calculateParallelogramArea() {
//     // get Parallelogram base value
//     const baseField = document.getElementById('parallelogram-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);

//     // get Parallelogram height value
//     const heightField = document.getElementById('parallelogram-height');
//     const heightValueText = heightField.value;
//     const height = parseFloat(heightValueText);

//     // validate input: base and height : data validation : input e number chara onno kichu na likhar jonno . way 2: using (isNaN)
//     if (isNaN(base) || isNaN(height)) {
//         alert('Please insert a number');
//         // alert show korar por kono output na dekhanor jonno (return) korbo.
//         return;
//     }

//     // rectangle area
//     const area = base * height;

//     // show rectangle area
//     const areaSpan = document.getElementById('parallelogram-area');
//     areaSpan.innerText = area;

//     // from{reusable-function.js => function addToCalculationEntry(areaType, area)} call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
//     addToCalculationEntry('Parallelogram', area);

// }