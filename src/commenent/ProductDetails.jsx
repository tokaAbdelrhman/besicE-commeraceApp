import { useParams   } from "react-router-dom";
import { useState , useEffect} from 'react';
import Product from "./Product.jsx"
function ProductDetails(){
    const api_url ="https://fakestoreapi.com/products";
    const params = useParams();
    const [product,setProduct]=useState({});
    useEffect (()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product))
    },[])
    return (
        <>
        <Product product={product} ShowButton={false}/>
        </>
    );
}
export default ProductDetails;