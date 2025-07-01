import { useEffect, useState } from "react";

const TodoApp = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://dummyjson.com/todos');
            const result = await response.json();
            console.log(result.todos);
            setList(result.todos)
        }

        fetchData();
    }, [])

    return (
        <div>
            {list.map((item) => {
                return (
                    <h3>{item.todo}</h3>
                )
            })}
        </div>
    )
}

export default TodoApp;