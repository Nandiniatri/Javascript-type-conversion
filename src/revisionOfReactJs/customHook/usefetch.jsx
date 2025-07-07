import { useEffect, useState } from "react";

const useFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log('Network Error');
            }
        }

        fetchData();
    }, [])

    return { data }
}

export default useFetch;