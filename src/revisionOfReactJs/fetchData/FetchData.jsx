const FetchData = () => {


    const fetchProduct = async() => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
        } catch (error) {
            console.log('Network is slow');   
        }

    }
    return (
        <div>

        </div>
    )
}


export default FetchData;