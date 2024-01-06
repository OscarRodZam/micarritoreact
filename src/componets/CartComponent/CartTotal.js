import { useContext } from "react";
import { dataContex } from "../Context/DataContex";

const CartTotal = () => {
    const {cart}= useContext(dataContex);
  
    const total = cart.reduce((acc,el)=> acc + el.price * el.quanty, 0);
    return (
        <div className="cartTotal">
            <h3>total a pagar: {total} $</h3>
        </div>
    );
};


export default CartTotal