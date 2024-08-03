
//  ----- rhombus calculation ----------
function calculateRhombusArea() {
    const diagonals1 = getInputValue('rhombus-diagonals-1');
    const diagonals2 = getInputValue('rhombus-diagonals-2');

    // Validate inputs (condition to put valid number to the input fieled)
    if (!validateInputs(diagonals1, diagonals2)) {
        return;
    }


    // show rhombus area
    const area = 0.5 * diagonals1 * diagonals2;
    
    setElementInnerText('rhombus-area', area);
  
    addToCalculationEntry('Rhombus', area);
}

// -------- pentagon calculation ---------
function calculatePentagonArea() {
    const pentagon = getInputValue('pentagon-penta');
    const angles = getInputValue('pentagon-angles');
   
    if (!validateInputs(pentagon, angles)) {
        return;
    }

    // show pentagon area
    const area = 0.5 * pentagon * angles;
    setElementInnerText('pentagon-area', area); 

    addToCalculationEntry('Pentagon', area);
}


// ---------------- ellipse calculation ----------
function calculateEllipseArea() {
    const majorAxis = getInputValue('ellipse-major-axis');
    const minorAxis = getInputValue('ellipse-minor-axis');

    // Validate inputs (condition to put valid number to the input fieled)
    if (!validateInputs(majorAxis, minorAxis)) {
        return;
    }

    // show ellipse area
    const area = 3.14 * majorAxis * minorAxis;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal); 
    
    addToCalculationEntry('Ellipse', areaTwoDecimal);
}



//  ------------------------------------ code with commment -------------------------

// //  ----- rhombus calculation ----------
// function calculateRhombusArea() {
//     const diagonals1 = getInputValue('rhombus-diagonals-1');
//     // console.log(diagonals1);
//     const diagonals2 = getInputValue('rhombus-diagonals-2');
//     // console.log(diagonals1);

//     // Validate inputs (condition to put valid number to the input fieled)
//     if (!validateInputs(diagonals1, diagonals2)) {
//         return;
//     }


//     // show rhombus area
//     const area = 0.5 * diagonals1 * diagonals2;
//     // call the innerText calculate area (when we call function we can set value('rhombus-area') as parameter and also can set variable(area) as parameter to set the value in the variable)
//     setElementInnerText('rhombus-area', area);
 

//     // from{common.js => function addToCalculationEntry(areaType, area)} call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
//     addToCalculationEntry('Rhombus', area);
// }

// // -------- pentagon calculation ---------
// function calculatePentagonArea() {
//     const pentagon = getInputValue('pentagon-penta');
//     // console.log(pentagon);
//     const angles = getInputValue('pentagon-angles');
//     // console.log(angles);

//     // Validate inputs (condition to put valid number to the input fieled)
//     if (!validateInputs(pentagon, angles)) {
//         return;
//     }

//     // show pentagon area
//     const area = 0.5 * pentagon * angles;
//     setElementInnerText('pentagon-area', area); 

//     // from{common.js => function addToCalculationEntry(areaType, area)} call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
//     addToCalculationEntry('Pentagon', area);
// }


// // ---------------- ellipse calculation ----------
// function calculateEllipseArea() {
//     const majorAxis = getInputValue('ellipse-major-axis');
//     // console.log(majorAxis);
//     const minorAxis = getInputValue('ellipse-minor-axis');
//     // console.log(minorAxis);

//     // Validate inputs (condition to put valid number to the input fieled)
//     if (!validateInputs(majorAxis, minorAxis)) {
//         return;
//     }

//     // show ellipse area
//     const area = 3.14 * majorAxis * minorAxis;
//     // fixed 2 digits after (.)
//     const areaTwoDecimal = area.toFixed(2);
//     setElementInnerText('ellipse-area', areaTwoDecimal); 
    

//     // from{common.js => function addToCalculationEntry(areaType, area)} call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
//     addToCalculationEntry('Ellipse', areaTwoDecimal);
// }
