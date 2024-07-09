
//  ----- rhombus calculation ----------
function calculateRhombusArea() {
    const diagonals1 = getInputValue('rhombus-diagonals-1');
    // console.log(diagonals1);
    const diagonals2 = getInputValue('rhombus-diagonals-2');
    // console.log(diagonals1);

    // validate 
    if (isNaN(diagonals1) || isNaN(diagonals2)) {
        alert('Please insert a number');
        // alert show korar por kono output na dekhanor jonno (return) korbo.
        return;
    }

    // show rhombus area
    const area = 0.5 * diagonals1 * diagonals2;
    // call the innerText calculate area (when we call function we can set value('rhombus-area') as parameter and also can set variable(area) as parameter to set the value in the variable)
    setElementInnerText('rhombus-area', area);
 

    // call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
    addToCalculationEntry('Rhombus', area);
}

// -------- pentagon calculation ---------
function calculatePentagonArea() {
    const pentagon = getInputValue('pentagon-penta');
    // console.log(pentagon);
    const angles = getInputValue('pentagon-angles');
    // console.log(angles);

    // validate 
    if (isNaN(pentagon) || isNaN(angles)) {
        alert('Please insert a number');
        // alert show korar por kono output na dekhanor jonno (return) korbo.
        return;
    }

    // show pentagon area
    const area = 0.5 * pentagon * angles;
    setElementInnerText('pentagon-area', area); 

    // call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
    addToCalculationEntry('Pentagon', area);
}


// ---------------- ellipse calculation ----------
function calculateEllipseArea() {
    const majorAxis = getInputValue('ellipse-major-axis');
    // console.log(majorAxis);
    const minorAxis = getInputValue('ellipse-minor-axis');
    // console.log(minorAxis);

    // validate 
    if (isNaN(majorAxis) || isNaN(minorAxis)) {
        alert('Please insert a number');
        // alert show korar por kono output na dekhanor jonno (return) korbo.
        return;
    }

    // show ellipse area
    const area = 3.14 * majorAxis * minorAxis;
    // fixed 2 digits after (.)
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal); 
    

    // call function of (area calculator) and give (areaType => name of the shape, area => area calculation)  add to calculation entry
    addToCalculationEntry('Ellipse', areaTwoDecimal);
}