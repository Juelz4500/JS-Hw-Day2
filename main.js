console.log('JS Hw Day 2')

//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
const favorite_dish  = () =>{
    for (const key in person3) {
      console.log(key, person3[key])
    }
}
favorite_dish()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person4(name, age){
    this.name = name
    this.age = age

    this.printInfo = () => {
        console.log(`My name is ${this.name}, and I am ${this.age} years old!!`)
    }

    const addAge = (newage) => {
        newage = this.age + 1
        if(console.log(printInfo())){
            return newage
        }
    }

}
addAge();
// const person1 = new Person4('James', 42)
// console.log(person1.printInfo())


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isStringlength = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(string > 10){
                resolve('Big Word')
            } else {
                reject('Small Number')
            }
        }, 5000)
    })
}   
const response = isStringlength('HelloWorld')


// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
    let answer = ''
    for (let letter of str) {
      answer = letter + answer
    }
    return answer
    
  };

//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript


function boolToWord( bool ){
    const str = bool === true ? "Yes" : "No"
  return str
  }

            