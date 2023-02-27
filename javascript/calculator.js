//using buttons

let screen
const oneHandler = () => {
    result.innerHTML += one.innerHTML
}

const twoHandler = () => {
    result.innerHTML += two.innerHTML
}

const addsHandler = () => {
    result.innerHTML += add.innerHTML
}

const subHandler = () => {
    result.innerHTML += sub.innerHTML
}

const equalHandler = () => {
    screen = result.innerHTML
    result.innerHTML = eval(screen)
}

const delHandler = () => {
    screen = result.innerHTML
    s_number = screen.length
    result.innerHTML = screen.slice(0,s_number-1)
}

const resetHandler = () => {
    result.innerHTML = ""
}


// const submitHandler = () => {
    
    
// }

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let pw = password.value
    let un = username.value
    if (pw == "" || un == ""){
        alert("Fields required")
    }
    else{
        alert("Form submitted successfully for " + un)
        console.log(pw, un)
    }
})