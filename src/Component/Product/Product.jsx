import { useState, useEffect } from "react";
import Products from "./Products/Products";

const Product = () => {
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
        product.map((products, idx)=><Products key={idx} products={products}></Products>)
           }
        </div>
        </div>
    );
};

export default Product;