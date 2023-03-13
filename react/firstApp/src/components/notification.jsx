import React from "react";
import { useState } from "react";

const Notification = ({purpose}) => {
    const [name, setName] =  useState(true)
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    const clickHandler = () => {
        setName((prev)=>!prev)
        setCount(count+1)
        setLoading((prev) => !prev)
    }


    return(
        <div>
            This is a {purpose} nofication component {name ? (
                <h4>Habeeb</h4>
            ) : (
                <p>Kareem</p>
            )} {count}
            <button onClick={clickHandler}>
                Click
            </button>

            {loading ? "Hello World" : "Thanks"}
        </div>
    )
}

export default Notification;