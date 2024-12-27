import { useState } from "react";
import { useEffect } from "react"
import ListProductComponent from "./ListProductComponent";
import Navbar from "./Navbar";



function App() {

  const [isLoading, setisLoading] = useState(false);
  const [allProducts, setallProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => setallProducts(data.products));
    setisLoading(true)
  }, [])

  return (
    <div>
      <Navbar></Navbar>
    <div className="flex flex-wrap items-cente justify-center gap-[20px]">
      {isLoading ? allProducts.map((product) => {
        return <ListProductComponent key={product.id} product={product}/>
      }) : <h2>LOADING...</h2>}
    </div>
    </div>
  )
}

export default App
