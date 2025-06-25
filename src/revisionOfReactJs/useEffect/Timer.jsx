import { useEffect, useState } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component rendered or updated');
    }, [])


    return (
        <>
            <p>Timer: {count}</p>
            <button onClick={() => setCount(count + 1)}>count +</button>
        </>
    )
}

export default Timer;