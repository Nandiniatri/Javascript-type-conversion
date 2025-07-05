import Input from "../../component/Input";
import Button from "../../component/Button";
import { useEffect, useState } from "react";

const DebouncedSearchBar = () => {
    const [searchData , setSearchData] = useState('');

    useEffect(() => {
        const debouncedSearch = setTimeout(() => {
            if(searchData){
                console.log("search data" , searchData);   
            }
        },[500])

        return () => clearInterval(debouncedSearch);

    },[searchData])

    const handleSearch = (e) => {
        // setSearchData()
        // console.log(e.target.value);
        setSearchData(e.target.value);
    }

    return (
        <div>
            <Input type='search' placeholder='placeholder' onChange={(e) => handleSearch(e)} />
            <Button>Submit</Button>

            <h2>{searchData}</h2>
        </div>
    )
}

export default DebouncedSearchBar;