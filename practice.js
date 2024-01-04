// //  using for loop
// const numbers = [2, 4, 6, 8, 10];
// const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }
// console.log(output);

// solving problems with function
const numbers = [2, 4, 6, 8, 10];

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
            output.push(doubled)
    }
    
}
