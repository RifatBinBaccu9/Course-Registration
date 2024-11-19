import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import Products from "./Products/Products";

const Product = ({productHendel}) => {
    const [product, setProduct]=useState([]);

    useEffect(()=>{
        fetch('../../../public/Product.json')
        .then((res)=> res.json())
        .then((data)=>{
            setProduct(data);
        })
    },[]);
    return (
        <div className="w-[75%]">
            <div className="grid grid-cols-3 gap-3">
           {
        product.map((products, idx)=><Products
          key={idx}
          products={products} 
          productHendel={productHendel}></Products>)
           }
        </div>
        </div>
    );
};
Product.propTypes={
    productHendel: PropTypes.func
}
export default Product;