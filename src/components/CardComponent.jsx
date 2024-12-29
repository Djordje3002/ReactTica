

function CardComponent({ product }) {
  return (
    <div className="border border-green-400 w-[300px] h-auto content-center text-center">
        <img src={product.thumbnail} alt="" className="w-full object-cover" />
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{product.title}</h2>
      <button className="hover: scale-105 w-[80%] bg-green-500 text-white py-2 mx-[20px] my-[1rem] rounded-lg hover:bg-green-600 transition scale-11">Add to cart</button>
    </div>
  )
}

export default CardComponent
