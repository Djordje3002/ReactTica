import { ToastContainer } from 'react-toastify';
import useFetch from "./utils/useFetch";
import axios from 'axios';
import CardComponent from "./components/CardComponent";
import NavbarComponent from './components/NavbarComponent';

axios.defaults.baseURL = 'https://dummyjson.com';

function App() {

  const {data, isLoading} = useFetch();

  return (
    <div>
      <NavbarComponent />
      <div className="container w-full mx-auto flex flex-col items-center">
      <h1 className="text-[60px] text-green-700 font-extrabold my-[30px]">
        Phone Shop
      </h1>
        <div className='container flex align-center justify-center gap-[20px] content-center flex-wrap'>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            data.map((product) => <CardComponent key={product.id} product={product} />)
          )}
        </div>
        </div>
      <ToastContainer />
    </div>

  )
}
 
export default App
