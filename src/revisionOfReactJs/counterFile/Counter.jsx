import { useState } from "react";

const CounterFile = () => {
    const [count , setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    }

    const handleMinus = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <button onClick={handlePlus}>+</button>
            {count}
            <button onClick={handleMinus}>-</button>
        </div>
    )
}

export default CounterFile;