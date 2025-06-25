import { useState } from "react";
import ReactMemoChild from "./Child";

const ReactMemo = () => {
    const [count, setCount] = useState(0);

    const handleCountPLus = () => {
        setCount(count + 1);
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleCountPLus}>Counter +</button>
            <ReactMemoChild name="Nandini" />
        </>
    )
}

export default ReactMemo;