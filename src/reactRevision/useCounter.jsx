import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState(0);

    const handlePrev = () => {
        setCount(count - 1);
    }

    const handleNext = () => {
        setCount(count + 1);
    }

    return { count }
}

export default useCounter;