import { Link } from "react-router-dom";
function Product (props){
    const {product ,ShowButton}=props;
    return (
        <>
            <div className="card " >
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    {ShowButton && <Link to={`/product/${product.id}`} className="btn btn-primary">Details</Link>}
    
  </div>
</div>
        </>
    );
}
export default Product;