import axios from "axios";
import { useEffect, useState } from "react";

const AxiosData = () => {
    const [data, setData] = useState([]);

    const fetchWithAxios = async () => {
        const response = await axios('https://dummyjson.com/users');
        const result = await response.json();
        console.log(result);
        setData(result);
    }

    useEffect(() => {
        fetchWithAxios();
    }, [])

    return (
        <div>
            {data.map((item) => {
                return (
                    <div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default AxiosData;