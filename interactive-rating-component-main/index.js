let star_number
btn1.addEventListener("click",
    () => {
        btn1.classList.add("active")
        btn2.classList.remove("active")
        btn3.classList.remove("active")
        btn4.classList.remove("active")
        btn5.classList.remove("active")
        // rate.innerHTML= btn1.innerHTML
        // console.log(star_number)
        localStorage.setItem('star', btn1.innerHTML)
    }
)

btn2.addEventListener("click",
    () => {
        btn2.classList.add("active")
        btn3.classList.remove("active")
        btn1.classList.remove("active")
        btn4.classList.remove("active")
        btn5.classList.remove("active")
        localStorage.setItem('star', btn2.innerHTML)

    }
)

btn3.addEventListener("click",
    () => {
        btn3.classList.add("active")
        btn2.classList.remove("active")
        btn1.classList.remove("active")
        btn4.classList.remove("active")
        btn5.classList.remove("active")
        localStorage.setItem('star', btn3.innerHTML)

    }
)

btn4.addEventListener("click",
    () => {
        btn4.classList.add("active")
        btn1.classList.remove("active")
        btn2.classList.remove("active")
        btn3.classList.remove("active")
        btn5.classList.remove("active")
        localStorage.setItem('star', btn4.innerHTML)

    }
)

btn5.addEventListener("click",
    () => {
        btn5.classList.add("active")
        btn1.classList.remove("active")
        btn3.classList.remove("active")
        btn4.classList.remove("active")
        btn2.classList.remove("active")
        localStorage.setItem('star', btn5.innerHTML)
    }
)


