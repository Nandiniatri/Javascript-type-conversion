import { useState } from "react";

const Counter = () => {
    const [count , setCount] = useState(0);
    
    return (
        <div>
            <button>+</button>
            {count}
            <button>-</button>
        </div>
    )
}

export default Counter;