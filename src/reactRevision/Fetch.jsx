import { useEffect, useState } from "react";

const FetchApis = () => {
    const [data, setData] = useState([]);
    console.log(data);
    

    const fetchProductApi = async() => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            console.log(response);
            
            const result = await response.json();
            setData(result.products);
        } catch (error) {
            console.log('Network Slow');   
        }
    }

    useEffect(() => {
        fetchProductApi();
    },[])

    return (
        <div>
            {data.map((item) => {
                console.log(item);
                return (
                    <div>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FetchApis;