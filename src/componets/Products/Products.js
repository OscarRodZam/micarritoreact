import { useContext } from "react";
import { dataContex } from "../Context/DataContex";

import "./products.css";

const Products = () => {
    const {data, buyProducts} = useContext(dataContex);



  return data.map((product)=>{
    return (
        <div className='card' key={product.id}>
            <img src={product.img} alt='img-poduct-card'/>
            <h3>{product.name}</h3>
            <h4>{product.price}$</h4>
            <button onClick={()=>buyProducts(product)}>Comprar</button>
            </div>

    );
  });
};

export default Products;