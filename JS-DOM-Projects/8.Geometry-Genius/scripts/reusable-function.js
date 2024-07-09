//  reusable function ----> reduce duplicate code


// reusable get Input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);

    // jokhon jei different function call korbe tokhon value return korbe 
    return value;
}


// ----- reusable set (span, p, div, etc) InnerText in calculate area

// (elementId) parameter is for to set the id of (calculate area) of different things
// (area) parameter is to set the (calculate area) id.
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// ***** area calculator ***** add to calculation entry ******
// (jokhon kono calculate button e click korbo oi card e calculation dekhanor shathe shathe(area calculation) card eo shei card er name and calculation ta add hobe)
/*
    1. get the element where you want to add the dynamic HTML
    2. create an element you want to add
    3. if needed add some class
    4. set innerHTML. It could be dynamic template string
    5. append the created element as a child of the parent
*/

function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    // get the element where you want to add the dynamic HTML
    const calculationEntry = document.getElementById('calculation-entry');

    // (area-calculator) e ('calculation-entry') er inside e child count korte parbo (means 0, 1, 2, evabe number dite parbo)
    const count = calculationEntry.childElementCount;


    // create an element you want to add
    const p = document.createElement('p');
    // p.innerHTML = areaType + ' ' + area;

    // add space on the top & bottom
    p.classList.add('my-4');

    // *  can also add template string into the (area calculator) instead of (p.innerHTML = areaType + ' ' + area;) 
    // {output: 1. Parallelogram 50 cm2 < button > Convert m</>}
    
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-primary">Convert m<sup>2</sup></button>`;

    calculationEntry.appendChild(p);   
}


// ////////////////////////////////////////////////////////////
/*
// Data validation : input e number chara onno kichu na likhar jonno .
1. set the proper type of the input field. (number, data, email)
2. check type using (typeof) : parseFloat('12') => ans is 12; parseFloat('12x') => ans is 12; parseFloat('abc') => ans is (NaN).
3. using (isNaN):Not a Number, isNaN is checking whether the input is not a number or not. isNaN(2) => false (means it's a number) / isNaN('abc') => true (means it's not a number)

*/

