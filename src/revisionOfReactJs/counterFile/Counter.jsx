import { useState } from "react";

const Counter = () => {
    const [count , setCount] = useState(0);

    const handlePlus = () => {

    }

    const handleMinus = () => {

    }

    return (
        <div>
            <button onClick={handlePlus}>+</button>
            {count}
            <button onClick={handleMinus}>-</button>
        </div>
    )
}

export default Counter;