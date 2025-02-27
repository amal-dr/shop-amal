import './App.css'
import {useEffect,useState} from 'react'
import { BrowserRouter , Route, Routes } from "react-router-dom";
import axios from 'axios'
import Home from './Home'
import Jewlery from './Jewlery'
import Men from './Men'
import Women from './Women'
import Electronics from './Electronics'
import Cart from './Cart';
import More from './More';
import Nav from './Nav'
import Notfound from './Notfound'
import Buy from './Buy';
import Form from './Form';



export default function App() {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=>setproducts(res.data))
        .catch(err=>setproducts(err.message))
    },[])
  return (
    <> 
<BrowserRouter>
        <Nav /> 
            <Routes>
                <Route path='/' element={<Home products={products} />} />
                <Route path='/jewlery' element={<Jewlery products={products} />} />
                <Route path='/men' element={<Men products={products} />} />
                <Route path='/women' element={<Women products={products} />} />
                <Route path='/electronics' element={<Electronics products={products} />} />
                <Route path='/cart' element={<Cart products={products} />} />
                <Route path="/product/:id" element={<More products={products} />} />
                <Route path="/buy/:productId" element={<Buy products={products} />} />
                <Route path="/form/:productId" element={<Form products={products} />} />
                <Route path='*' element={<Notfound />} />
                 {/* <Route path='/product/:id' element={<pr products={products} />} /> */}
            </Routes>
            
        </BrowserRouter>
    </>
  )
}
