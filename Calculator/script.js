let num1 = 10;
let num2 = 2;
let numEl = document.getElementById("num1-el")
numEl.textContent = "First Number: " + num1;


let numEl2 = document.getElementById("num2-el")
numEl2.textContent = "Second Number: " + num2


console.log(sum)
//  get the sul-el byID

sumEl.textContent = "Sum: " + sum

// function add() {
//     let sum = num1 + num2 // 12
//     document.getElementById("sul-el").textContent = "Sum: " + sum
// }


// function division() {
//     let result = num1 / num2
//     document.getElementById("sul-el").textContent = "Division " + result
// }


function subtract() {
    let result = num1 - num2
    document.getElementById("sul-el").innerHTML = "Subtraction: " + result 
}

function multiply() {
    let result = num1 * num2
    document
}



// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


