
// let counter = 5
// counter = 7

// // let name = "Akeel"
// let decimal = 0.4

// document.getElementById("dogCounter").innerText = counter

// let age1 = 25
// let age2 = 22

// let totalAge = age1 + age2  
// // let the total age = 25 + 22

// console.log(totalAge)


// let firstName = "Akeel"
// let lastName = "Lashley"

// let fullName = (firstName + " " + lastName)
// console.log(fullName)


// // Expected Output: Hello, My name is [fullName]. I am [age] years old.


// let age = 50;
// console.log(age)

// age = age + 50;
// console.log(age)
// age = ++age  // age = 50 + 1

// console.log(age)


// age = --age
// console.log(age)


// // Create a variable, bonusPoints.Initialize it as 50. Increase it to 100.

// // Decreate it down to 25, and then finally increate it to 70

// // console.log it after each step




// function displayWelcomeMessage() {
//     console.log("We are so thrilled to have you with us! We welcome you to our group! Looking forward to making things happen with you! Our warmest welcome to you! Together, we can create the synergy that will take us to a lot of success as we pursue our goals!")

// }

// function Hello() {
//     console.log("Hello")
// }


// displayWelcomeMessage()


// Create a function that displays your name and age remember to invoke (call) the function

// Global Scope Variables
// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLapTimes() {
//     // Local Scope Variable
//     let lap4 = 46

//     console.log(totalTime)
// }

// totalLapTimes()


// // This Won't execute
// console.log(totalTime)







// STEP 1: Create a button in HTML
// STEP 2: Create a variable, dogs.Initialize it as 0
// STEP 3: Create a function addDog() to increment counter everytime the button is clicked
// STEP 4:update the dogCounter in the HTML to reflect the new count

let dogs = 0;

function addDog() {
    // increment counter everytime the button is clicked
    dogs++;

    // update the dogCounter in the HTML to reflect the new count
    document.getElementById("dogCounter").innerText = dogs + " dogs";
}

function cats() {


}
function reset() {
    dogs = 0;

    document.getElementById("dogCounter").innerText ="0 dogs";

    cats = 0;
    
    document.getElementById("catCounter").innerText ="0 cats";
}``
