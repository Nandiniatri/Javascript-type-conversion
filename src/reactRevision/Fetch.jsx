import { useEffect, useState } from "react";

const FetchApis = () => {
    const [data, setData] = useState([]);
    console.log(data);
    const [searchValue, setSearchValue] = useState('');


    const fetchProductApi = async () => {
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
    }, [])

    const handleSearch = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    const filterData = data.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <div>
            <input type="search" onChange={handleSearch} value={searchValue}/>

            {filterData.map((item) => {
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