import { useEffect, useState } from "react";

const FetchData = () => {
    const [data , setData] = useState([]);

    const fetchProduct = async() => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
            // console.log(result);
            setData(result.products);
        } catch (error) {
            console.log('Network is slow');   
        }
    }

    useEffect(() => {
        fetchProduct();
    },[])

    console.log(data);
    
    return (
        <div>
            {data.map((itm) => {
                return (
                    <div key={itm.id}>
                        <h3>{itm.title}</h3>
                        <p>{itm.description}</p>
                    </div>
                )
            })}
        </div>
    )
}



export default FetchData;