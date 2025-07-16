import axios from "axios";
import { useEffect, useState } from "react";

const AxiosData = () => {
    const [data , setData] = useState([]);
    
    const fetchWithAxios = async() => {
        const response = await axios('https://dummyjson.com/users');
        const result = await response.json();
        console.log(result); 
    }

    useEffect(() => {
        fetchWithAxios();
    },[])

    return(
        <div>
            
        </div>
    )
}

export default AxiosData;