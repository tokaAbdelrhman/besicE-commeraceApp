import Product from "./Product";

import { useEffect, useState } from "react";
function ProductList (){
    const api_url ="https://fakestoreapi.com/products";
    const[Products,setProducts]= useState([]);
    const getProducts =()=>{
        fetch(api_url)
            .then((res)=>res.json())
            .then((data)=>setProducts(data))
    }
    useEffect(()=>{
getProducts();

    },[])
    return (
        <>
        <h2  className="text-center p-3" >product list</h2>
        {/* <div classNameName="container "> */}
        <div classNameName="row ">
            {Products.map((product)=>{
                return (
                    <div className=" col-3 " key={product.id} >
    <Product product={product} ShowButton={true}/>
        </div>
                );
            })}
        
        {/* </div> */}
        
       
        </div>
        </>
    );
}
export default ProductList;