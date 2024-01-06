import './Navbar.css';
import { Link } from 'react-router-dom';
import TotalItems from '../CartComponent/TotalItems';
import { useContext } from "react";
import { dataContex } from "../Context/DataContex";


const Navbar = () => {
    const {cart}= useContext(dataContex);
  return (
    <div className="nav-container">
        <nav className='navbar'>
            <Link to={"/"}>
            <h1 className='navbar-logo'>Tienda</h1>
            </Link>
            <Link className='seeCarrito' to={"/cart"}>🛒
            {cart.length > 0 ? <TotalItems /> :null}
            
            </Link>
        </nav>
    </div>
  
    );
};

export default Navbar;