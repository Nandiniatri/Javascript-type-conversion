import { useState } from "react";

const SelectTheOptions = () => {

    const [selectName , setSelectedName] = useState([]);

    const handleSelect = (event) => {
        console.log(event.target.value); 
        const values = event.target.value;  
        setSelectedName(values);
    }

    return (
        <>
            <select name="Name" onChange={handleSelect}>
                <option>Nandini Atri</option>
                <option>Vanshika</option>
                <option>Qwerty</option>
            </select>

            <p>{selectName}</p>
        </>
    )
}

export default SelectTheOptions;