// IF STATEMENT
let score = 20
let userGrade = document.getElementById("userGrade")
function Grade() {

    if(score >= 80) {
    userGrade.textContent = "Grade: A"
    } else if(score >= 50) {
        userGrade.textContent = "Grade: B"
    } else {
        userGrade.textContent = "Grade: F"

    }

}

function Boolean() {
    let isRaining = true;

    if(isRaining === true) {
        console.log("It's Raining :(")
    } else {
        console.log("It's Sunny :)")
    }
}

function myNumber() {
    let number = 10;

    if(number === 10) {
        console.log("Number is 10")
    } else {
        console.log("Number is not 10")
    }
}

myNumber()


function notMyNumber() {
    let age = 18;

    if(age !== 24) {
        console.log("Not my Age")
    } else {
        console.log(`Correct, My age is ${age}`)
    }
}
notMyNumber()


let number1 = 10
let number2 = "20"

if(number1 === number2) {
    console.log("Same numbers")
} else {
    console.log("Not the same Numbers")
}



//  DATATYPES

// Number
let num = 12
let decimal = 7.5

// String
let name = "Akeel"


//  Boolean
let isValid = true


// object
let person = {
    firtstName: "Akeel",
    lastName: "Lashley",
    age: 24,
    isMale: true
}


console.log(person.age)

console.log("Hello my name is " + person.firtstName + " " + person.lastName + " I am " + person.age + " years old")

console.log(`Hello my name is ${person.firtstName} ${person.lastName} I am ${person.age} years old`)



// Arrays
            //   0        1        2         3
let colours = ["blue", "black", "pink", "purple"]

console.log(colours)
console.log(colours[3])
colours.push("brown")
console.log(colours)
colours.pop()
console.log(colours)
colours.splice(2, 1)
console.log(colours)


function forLoopExample() {
// For Loops

//  Counting to ten 

//  START           FINISH      STEP SIZE 

let MyName = "Akeel"

for(let i = 1; i <= 10; i += 1 ) {
    console.log(i)
}



// for (let count = 1; count <= 5; count += 1) {
//     console.log(count) //
//     // 1
//     // 2
//     // 3
//     // 4
//     // 5
// }
}

function forLoopArray() {

    let messages = [ 
    "Hey, how's it going?", // 0
    "I'm great, thank you! How about you?", // 1
    "Same here!", // 2 
    "Great to hear", // 3

    ]

    for(let i=0; i < messages.length; i++) {
        console.log(messages[i])
    }

    // ARRAY LENGTH 5
// 1ST) i = 0 // IS i LESS THAN ARRAY LENGTH (4)?: YES // Hey, how's it going?
// 2ND) i = 1 // IS i LESS THAN ARRAY LENGTH (4)?: YES // I'm great, thank you! How about you?
// 3RD) i = 2 // IS i LESS THAN ARRAY LENGTH (4)?: YES // Same here!
// 4TH) i = 3 // IS i LESS THAN ARRAY LENGTH (4)?: YES // Great to hear
    //5TH) i = 4 // IS i LESS THAN ARRAY LENGTH (4)?: NO // BREAK

// }


    let introduction = [ "Hello ", "my ", "name ", "is ", "Akeel"]
    let greetingEl = document.getElementById("greeting")

    for(let i=0; i < introduction.length; i++) {
    
    //   "Hello My name is Akeel"           "Hello my name is      "             "Akeel"
        greetingEl.textContent = greetingEl.textContent + introduction[i]


        // greetingEl.textContent += introduction[i]


        // Hello
        // my
        // name
        // is
        // Akeel
    }

}


forLoopArray()



function ArrayExample() {
let introduction = [ "Hello00000 ", "my ", "name0000 ", "is", "Akee000l"]

    for(let i=0; i < introduction.length; i++) {
                console.log(introduction[i])

    //     if(introduction[i].trim().length > 4) {
    //     } else {
    //         console.log(introduction[i])
    //     }
    // }


}
ArrayExample()




























































