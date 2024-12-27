


function ListProductComponent({product}) {

  return (
    <div className="w-[300px] h-auto border border-blue-700 text-center">
      <img src={product.thumbnail} alt={product.title} className="w-[150px] h-[150px]"/>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ListProductComponent
