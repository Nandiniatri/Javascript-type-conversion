import { useState } from "react";

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    const handleCountPLus = () => {
        setCount(count + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleCountPLus}>Counter +</button>
        </>
    )
}

export default ReactMemo;