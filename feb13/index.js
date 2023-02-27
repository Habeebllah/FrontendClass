/*
let x, address, names, present, absent
x = 4
address = "It's Idi Aba, Abeokuta Ogun State"
names = 'Habeeb'
present = true
absent = false
let age = 5

const product = null
console.log(age*6)
console.log(x*2)

let user_input = prompt("Enter your age:  ")
console.log("In the next 5 years your will be", parseInt(user_input)+5, "old")

let w, z
w = 5
z = '5'
// Arithmetic Operators
console.log(w+z)
console.log(w*z)
console.log(w/z)
console.log(z%w)
console.log(w**z)
console.log(w-z)
//w *= 5
console.log(w)

//Comparison or Boolean Operators
console.log(w===z)
console.log(w==z)
console.log(w>=z)
console.log(w<=z)
console.log(w>z)
console.log(w<z)

//Logical Operator
and 
or
&&
|| */

//Conditional Statement
// let x, y
// x = 5
// y = 7

// if (x==y) {
//     console.log("Hello World!!!")
// }
// else{
//     console.log("Not found")
// }
/*
Write a program that ask a user for any number then your program should tell the user if the number inputted
is even or old

Write a program that ask a user for his/her score in math 0-100. If the score 
1. less that 40 return F
2. greater than or equal 40 and less than or equal to 45 return E
3. greater than or equal 45 and less than or equal to 50 return D
4. greater than or equal 50 and less than or equal to 55 return C
5. greater than or equal 55 and less than or equal to 60 return B
6. greater than 60 return A
*/
/* 
let u_input
u_input = prompt("Enter any number you want to know if its even or odd: ")
if (parseInt(u_input) % 2 == 0){
    console.log(u_input, "is an even number")
}
else if (parseInt(u_input) % 2 == 1){
    console.log(u_input, "is an odd number")
}
else{
    console.log("Invalid Input")
} */


// let score
// score = prompt("Enter you score in math: ")
// if (parseInt(score) < 40){
//     console.log("F")
// }
// else if(parseInt(score) > 40 && parseInt(score) <= 45){
//     console.log("E")
// }
// else if(parseInt(score) > 45 && parseInt(score) <= 50){
//     console.log("D")
// }
// else if(parseInt(score) > 50 && parseInt(score) <= 55){
//     console.log("C")
// }
// else if(parseInt(score) > 55 && parseInt(score) <= 60){
//     console.log("B")
// }
// else if(parseInt(score) > 60 && parseInt(score) <= 100){
//     console.log("A")
// }
// else{
//     console.log("Invalid Input")
// }

//Assignment
/*
1. Write a program that ask a user for any month name then your program should display the number
of days in that month

2. Write a program that ask a user for they username and password then your program should authenticate
the user. If the user login credentials matches welcome the user, else return invalid input

3. Write a program that calculate the number of seconds in a year
*/



//Arrays & Objects

// const fruits = ['mango', 'pawpaw', 'apple', 'banana']

// console.log(fruits[3])
// fruits.push("Pear")
// fruits.pop()
// fruits.shift()
// fruits.unshift("Sugar")
// console.log(fruits.length)
// console.log(fruits)

// const cars = ['mazda', 'toyota', 'jeep', 'honda']
// console.log(cars.concat(fruits))

// const new_car = cars.splice(1,3)
// console.log(new_car)

// for (let i = 5; i < 10; i++){
//     console.log(i, "Hello World")
// }

// for (let n = 0; n < 13; n++){
//     console.log(2, "x", n, '=',n*2)
// }

// let num = prompt("Enter the number you want its multiplication table: ")
// for (let i = 0; i < 13; i++){
//     console.log(num, 'x', i, '=', num*i)
// }

/*
1. Make an array for your hobbies and console.log the favourite hobby
2. write a program that ask a user for 3 different numbers then add each 
number to an array and then display the array
*/

// const carrs = new Array('toyota', 'benz')
// console.log(carrs)


// const fruit = ['mango', 'pawpaw', 'apple', 'banana']
// for (let f = 0; f < fruit.length; f++){
//     console.log(fruit[f])
// }

// // A program that send message to all items in an array

// let message = "Welcome to grazac!!!"
// const names = ['olabode', 'camilus', 'taiwo', 'pritchard', 'adeleke']
// for (let n = 0; n < names.length; n++){
//     console.log(names[n], message)
// }

// Write a program the display the sum of all the numbers is an array
// [2,4,6,3,6,7,5,9]

// const numbers = [1,2,3,4,5]
// const new_array = []
// for (let n in numbers){
//     new_array.push(numbers[n]**2)
// }
// console.log(new_array)

// const numbers = [7,8,9,1,3,5,7,4,6]
// let sum = 0
// for (let n = 0; n < numbers.length; n++){
//     sum = sum + numbers[n]
//     //sum +=numbers[n]
// }
// console.log(sum)

// let summation = 0
// for (let x in numbers){
//     summation += numbers[x]
// }
// console.log(summation)

// //demo.innerHTML = "Hello World"

// numbers.map((x, i)=>{
//     console.log(x, "mapping", i)
// })


// let x, y
// x = 4
// y = 9

// while (x<=y){
//     console.log(x, "is lesser than", y)
//     x+=1
// }

// Making a multiplication table with while loop

// let num = 5
// let depth = 1

// while(depth < 13){
//     console.log(num, 'x', depth, '=', num*depth)
//     depth += 1
// }

// do{
//     console.log(num, 'x', depth, '=', num*depth)
//     depth += 1
// }
// while(depth<13)

// Write a program that ask a user the table he/she wants
// Using a while loop display the table to the user

// let w, u
// u = 2
// w = 4
// do{
//     console.log("hello world")
// }
// while(u==w)


// const grade = {'Math': 30, 'Eng': 40, 'Chem': 50}
// grade['Bio'] = 50
// console.log(grade)
// for (let g in grade){
//     console.log(g, grade[g])
// }

// const students = {
//     'Habeeb': {'age': 60, 'remark': 'Good'},
//     'Kareem': {'age': 50, 'remark': 'Satisfactory'},
// }

// const studentss = {
//     Habeeb: {age: 60, remark: 'Good'},
//     Kareem: {age: 50, remark: 'Satisfactory'},
// }


// console.log(students['Habeeb']['age'])
// console.log(students['Habeeb']['remark'])

// console.log(students.Habeeb)

// for(let s in students){
//     let instance = students[s]
//     for(let st in instance){
//         console.log(s, st, instance[st])
//     }
// }

//FUNCTIONS

// function greeting() {
//     console.log("Good morning!!!")
// }

// function summation(a, b){
//     console.log(a+b)
// }

// const greet = () => {
//     console.log('Hello World')
// }

// greeting()
// summation(4,6)
// greet()

// const multiplication = (number, depth) => {
//     for (let m = 1; m <= depth; m++){
//         console.log(number, 'x', m, '=', number*m)
//     }
// }
// multiplication(4, 8)

//Write a function that accpets a list of numbers as an argument
//Then your function should return the sum of the numbers in the
//list

/* const sums = (list) => {
    let total = 0
    for (let n in list){
        total += list[n]
    }
    return total
}

console.log(sums([1,2,3,4,5])) */

//DOM (Event Listener and Handler)
/* demo.innerHTML = Date()
let greets = gre.innerHTML
console.log(greets)

gre.style.color = 'pink'
gre.style.background = 'yellow'

const clickHandler = () => {
    alert("Javascript is fun...")
}
 */
let counts = 0
const addHandler = () => {
    counts += 1
    ZeroChecker(counts)
    count.innerHTML = counts
}

const removeHandler = () => {
    counts -= 1
    ZeroChecker(counts)
    count.innerHTML = counts
}

const ZeroChecker = (n) => {
    if (n < 0) {
        alert("Can't go lesser than zero")
        counts = 0
    }
}

//Design a simple UI a calculator that does
//only addition function using input fields

let number1 = 0
let number2 = 0
const num1Handler = () => {
    number1 = firstNum.value
}

const num2Handler = () => {
    number2 = secondNum.value
}

const addsHandler = () => {
    result.innerHTML = parseInt(number1) + parseInt(number2)
}

const subHandler = () => {
    result.innerHTML = parseInt(number1) - parseInt(number2)
}

//using buttons

let screen
const oneHandler = () => {
    result.innerHTML += one.innerHTML
}

console.log(screen)