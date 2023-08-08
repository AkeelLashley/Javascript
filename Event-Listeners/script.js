

// create a function saveInput()


// console log "Button Clicked" everytime the button is clicked"

function eventListener() {
    const inputBtnEL = document.getElementById("input-btn")

    inputBtnEL.addEventListener("click", function() {
        console.log("Event Listener Clicked")
    })
}


// create an event listener for "reset-btn". When the user Double Clicks ("dblclick") on the button it should console log. "Resetting web page" 


function letConst() {
    // Bank account info
    const name = "Akeel"
    let accountBalance = 10;
  
    name = "Akeel2"
    console.log(name)

    accountBalance += 50

    console.log(accountBalance)
}


function letVar() {
    // function scope (var)
    // block scope (let) 
    for(let i = 1; i <= 5; i++) {
        console.log(i)
    }
    console.log("Value of i " +i)
}


function userInput() {
    const inputBtn = document.getElementById("input-btn")
    const inputEL = document.getElementById("input-el")
    let ulEL = document.getElementById("ul-el")

    let shoppingList = [] 
    inputBtn.addEventListener("click", function() {
        // only push value to shoppingList array if inputEl.value is not empty
         ulEL.innerHTML = ""
        let removedWhiteSpace = inputEL.value.trim()

        if (removedWhiteSpace === "") {
            console.log("Empty VALUE!!")
        } 
        else {
            shoppingList.push(removedWhiteSpace)

            for(let i = 0; i < shoppingList.length; i++) {
                console.log(shoppingList[i])
                ulEL.innerHTML += "<li>" + shoppingList[i] + "</li>"
            }
        }

        inputEL.value = ""
    })
}









function templateString() {
    const name = "Akeel"
    let age = 10
    let sex = "male"

    // return "Hello my name is " + "" + name + " I am " + age + " years old" 
    // console.log(`Hello my name is ${name} I am ${age} years old. I am a ${sex}`)
    return `Hello my name is ${name} I am ${age} years old`

    
}





    function car(modelName, makeName, modelYear) {
         
        return {make: makeName, model: modelName, year: modelYear}

    }


    // let JeepInfo = car("Wrangler", "Jeep", 2023)
    // console.log(JeepInfo)

    // let HondaInfo  = car("civic", "Honda", 2001)
    // console.log(HondaInfo)

    
    







    // function getTaskFromLocalStorage(dfjdf) {
    //     return `First Item in the array is ${dfjdf[0]} `
    // }

    // let taskArray = getTaskFromLocalStorage()

    // console.log(taskArray)

    // // [Milk, Eggs, Tea, Sugar]



    // Nathan 
    // let array = ["Milk", "Eggs", "Tea", "Sugar"]
    // let cars = ["Audi", "Jeep"]
    // let taskArray1 = getTaskFromLocalStorage(array)
    // console.log(taskArray1)
    
    // // [Milk, Eggs, Tea, Sugar]






    function objectParam(studentObject) {
        return studentObject
    }

    let student = {name: "Akeel", age: 20}

let studentInfo = objectParam(student)

console.log(studentInfo)


function boolean(isCompleted) {
    // write an if statment to check weather isCompleted is true or false. 
    // If True console.log("Task Completed") else console.log("Not Completed")
    if (isCompleted === true) {
        console.log("Task Completed")
    } else {
        console.log("not completed")
    }
 }

 boolean(true)


 




    const ulEL = document.getElementById("ul-el");
    const errorMsg = document.getElementById("error-msg");

    const inputEl = document.getElementById("input-el");
    const inputBtn = document.getElementById("input-btn")
    
    const resetBtn = document.getElementById("reset-btn") 

    // function getTaskFromLocalStorage() {
    //     return JSON.parse(localStorage.getItem("tasks")) || [];
    // }

    // let shoppingList = getTaskFromLocalStorage()

    let shoppingList = JSON.parse(localStorage.getItem("shoppingList"))

    
    function displayList() {
        ulEL.innerHTML = ""

        // loop over the shoppingList array items and assigning the ulEl innerHTMl to a "</li>" item

        for(let i = 0; i < shoppingList.length; i++) {
            ulEL.innerHTML += "<li>" + shoppingList[i] + "</li>"
        }
    }

    displayList()
    inputBtn.addEventListener("click", function() {
        let removedWhiteSpace = inputEl.value.trim()


        if(removedWhiteSpace === "" ) {
            errorMsg.textContent = "Please Input a Value" 
        } else {
            errorMsg.textContent = ""
            shoppingList.push(removedWhiteSpace)
            localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
       
            displayList()
            inputEl.value = ""
        }
    })

    resetBtn.addEventListener("dblclick", function() {

        localStorage.clear()
        shoppingList= []
        displayList()
    })
















// Declare four const variables named inputEl, inputBtn and, resetBtn, ulEL. Use
// document.getElementById() to get input box, input button(Add) , reset Button (reset) and UL elemnt  from the HTML file.

// function RANDOM(){
// // Ryan
// const inputBtnID = document.getElementById("input-btn")
// // Shital
// const ulEl =document.getElementById("ul-el");
// // Nath
// const inputEl = document.getElementById("input-el")
// // Mert
// const ResetBtn = document.getElementById("reset-btn")
// // Akee
// let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];

// function displayList() {
//     ulEl.innerHTML = ""
//     //Ryan
//     for(let i = 0; i < shoppingList.length; i++) {
//         // NISHA + MER
//        ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>"
//     }
//     console.log(typeof JSON.stringify(shoppingList))
//     console.log(typeof shoppingList)
// }

// displayList()


// // Nisha 
// inputBtnID.addEventListener("click",function(){
//     //MERT + SHITAL ---BAHAR
//     let userInput = inputEl.value.trim()

//     if(userInput !== "") {
//         shoppingList.push(userInput)

//          localStorage.setItem("shoppingList", JSON.stringify(shoppingList))

//         displayList()
//         inputEl.value = ""
//     } else {
//         console.log("Please input a text")

//     }
 
// })

// //Ahmed
// ResetBtn.addEventListener("dblclick", function(){

// })


// function getTaskFromLocalStorage() {
//     return JSON.parse(localStorage.getItem("tasks")) || [];
// }

// let taskArray = getTaskFromLocalStorage()


// console.log(taskArray)

// let Tasks = [{text: "Code", completed: true},{text: "Coding", completed: false},{text: "Running", completed: true},{text: "Swimming", completed: false}]



// function createElement() {

//     // Ryan
// const inputBtnID = document.getElementById("input-btn")
// // Shital
// const ulEl =document.getElementById("ul-el");
// // Nath
// const inputEl = document.getElementById("input-el")
// // Mert
// const ResetBtn = document.getElementById("reset-btn")
// // Akee
// let shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];



// function displayList() {
//     ulEl.innerHTML = ""
//     //Ryan
//     for(let i = 0; i < shoppingList.length; i++) {
//         // NISHA + MER
//        ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>"
        
//        const li = document.createElement("li") // == "<li>" "</li>"
//         li.textContent = shoppingList[i] // 
//        //ulEl.append(li)
//     }
// }

// displayList()
// }
// }


