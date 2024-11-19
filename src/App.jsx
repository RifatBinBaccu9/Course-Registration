import './App.css'
import { useState } from 'react'
import Ceadite from './Component/Ceadite/Ceadite'
import Product from './Component/Product/Product'


function App() {
  
  const [product, setProduct]=useState([]);
  const [totlePrice, setTotlePrice]=useState([0]);
  const [totleCredit, setTotleCredit]=useState([0]);

  const productHendel= (products) =>{
    const producting=[...product,products];
    setProduct(producting);

    const {price, credit}=products;

    const prices=parseInt(price);
    const prisings=parseInt(totlePrice)
    const allPrice=prisings + prices;
    setTotlePrice(allPrice);
    console.log(totlePrice);
    
    const credits=parseInt(credit);
    const totleCredits=parseInt(totleCredit);
    const allCredit=credits + totleCredits;
    setTotleCredit(allCredit);
  }

  return (
    <>
      
      <main className='bg-[#F3F3F3] '>
      <div className='w-[90%] mx-auto'>
      <h1 className='text-center text-3xl font-extrabold pt-4'>Course Registration</h1>
      <div className='flex justify-between mt-10 gap-3'>
       <Product productHendel={productHendel}></Product>
       <Ceadite product={product} totlePrice={totlePrice} totleCredit={totleCredit}></Ceadite>
      </div>
      </div>
      </main>
    </>
  )
}

export default App
