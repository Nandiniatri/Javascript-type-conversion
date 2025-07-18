import axios from "axios";
import { useEffect, useState } from "react";

const AxiosData = () => {
    const [data, setData] = useState([]);

    const fetchWithAxios = async () => {
        const response = await axios('https://dummyjson.com/users');
        // console.log(response);
        console.log(response.data.users);
        setData(response.data.users);
    }

    useEffect(() => {
        fetchWithAxios();
    }, [])

    return (
        <div>
            {data.map((item) => {
                return (
                    <div>
                        <p>{item.firstName}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AxiosData;