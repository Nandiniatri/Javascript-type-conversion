import { useEffect, useState } from "react";

const TodoApp = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://dummyjson.com/todos');
            const result = await response.json();
            console.log(result);
        }

        fetchData();
        // setList(result)
    }, [])

    return (
        <div>

        </div>
    )
}

export default TodoApp;