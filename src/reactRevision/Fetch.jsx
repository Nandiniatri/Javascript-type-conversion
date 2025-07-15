import { useEffect, useState } from "react";

const FetchApis = () => {
    const [data, setData] = useState([]);

    const fetchProductApi = () => {
        try {
            const response = fetch('https://dummyjson.com/products');
            const result = response.json();
            setData(result);
        } catch (error) {
            console.log('Network Slow');   
        }
    }

    useEffect(() => {
        fetchProductApi();
    },[])

    return (
        <div>

        </div>
    )
}

export default FetchApis;