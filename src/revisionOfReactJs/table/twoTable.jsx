import { useState } from "react";

const TableOfTwo = () => {
    const [table2, setTable2] = useState([]);

    let i;

    const handleTableOf2 = () => {
        const n = [];
        for (i = 1; i <= 10; i++) {
            console.log(i * 2);
            n.push(i * 2);
        }
        setTable2(n);
    }

    return (
        <>
            <button onClick={handleTableOf2}>2</button>

            {table2.map((item) => {
                return (
                    <p key={item}>{item}</p>
                )
            })}
        </>
    )
}

export default TableOfTwo;
