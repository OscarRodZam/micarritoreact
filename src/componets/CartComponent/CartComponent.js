import { useContext } from "react";
import { dataContex } from "../Context/DataContex";
import CartElement from "./CartElement";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

const CartComponent = () => {
  const {cart}= useContext(dataContex);
  
  
  return(
    <>
    <Navbar/>
    {cart.length > 0 ?( 
    <>
    <CartElement />
    <CartTotal/>
    </>
    ): (
      <h2 className="cart-message-center">
        El carrito esta vacio</h2>
    )}
    </>
  )
};
  


export default CartComponent