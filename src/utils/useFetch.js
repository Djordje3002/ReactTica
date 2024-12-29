import { useEffect, useState } from "react"
import ProductService from "./ProductService"

const useFetch = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        ProductService.getProductByCategory()
            .then(res => {
                setData(res.data.products)
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, [])

    return {data, isLoading}
}

export default useFetch;