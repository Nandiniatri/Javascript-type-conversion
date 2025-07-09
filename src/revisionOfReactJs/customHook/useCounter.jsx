import { useState } from "react"

const useCounter = () => {
    const [count, setCount] = useState();

    const handlePrev = () => {
        setCount(count - 1);
    }

    const handleNext = () => {
        setCount(count + 1);
    }

    return { handleNext, handlePrev }
}

export default useCounter;