import { useContext } from "react";
import { dataContex } from "../Context/DataContex";

const TotalItems = () => {
    const {cart}= useContext(dataContex);
    const itemQuanty = cart.reduce((acc, el)=> acc + el.quanty, 0);
  return <span className="cart-item-total">{itemQuanty}</span>;
  
};

export default TotalItems;