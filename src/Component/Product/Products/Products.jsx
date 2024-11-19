import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";


const Products = ({products, productHendel}) => {
    const {name,description,photo,price,credit}=products;
    
    return (

            <div className='bg-[#fff] p-3 rounded-md'>
                <img src={photo} alt={name} />
                <h1 className='text-md font-bold py-2'>{name}</h1>
                <p className='text-base font-extralight'>{description}</p>
                <div className=''>
                <div className='grid grid-cols-2 gap-1 my-2'>
                  <div className='flex gap-2'>
                    <span className='mt-[5px] text-md'><FiDollarSign /></span><span> Price: {price}</span>
                  </div>
                  <div className='flex gap-2'>
                  <span className='mt-[5px] text-md'><IoBookOutline /></span><span>Credit: {credit}hr</span>
                  </div>
                </div>
                <button onClick={()=>productHendel(products)} className='bg-green-500 text-white w-full p-2 my-2 rounded-xl items-end justify-end'>Select</button>
                </div>
            </div>

    );
};
Products.propTypes={
    products: PropTypes.object.isRequired,
    productHendel: PropTypes.func
}
export default Products;