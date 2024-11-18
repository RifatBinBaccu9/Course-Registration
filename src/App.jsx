
import './App.css'
import Ceadite from './Component/Ceadite/Ceadite'
import Product from './Component/Product/Product'

function App() {
  

  return (
    <>
      
      <main className='bg-[#F3F3F3] '>
      <div className='w-[90%] mx-auto'>
      <h1 className='text-center text-3xl font-extrabold pt-4'>Course Registration</h1>
      <div className='flex justify-between mt-10'>
       <Product></Product>
       <Ceadite></Ceadite>
      </div>
      </div>
      </main>
    </>
  )
}

export default App
