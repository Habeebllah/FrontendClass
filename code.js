
let number1 = 0
let number2 = 0
const num1Handler = () => {
    number1 = firstNum.value
}

const num2Handler = () => {
    number2 = secondNum.value
}

const oneHandler = () => {
    number1 = one.innerHTML
}

const twoHandler = () => {
    number2 = two.innerHTML
}
const addsHandler = () => {
    result.innerHTML = parseInt(number1) + parseInt(number2)
}

const subHandler = () => {
    result.innerHTML = parseInt(number1) - parseInt(number2)
}

const multHandler = () => {
    result.innerHTML = parseInt(number1) * parseInt(number2)
}

const delHandler = () => {
    result.innerHTML = ""
}