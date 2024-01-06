import {createContext, useEffect, useState } from "react";
import axios from "axios";
export const dataContex =createContext();


    const DataProvider = ({children})=>{
      const savedCart = JSON.parse(localStorage.getItem("cart")) || []
        const [data, setData]= useState([]);
        const [cart, setCart]= useState(savedCart);
    
        useEffect(()=>{
          localStorage.setItem("cart",JSON.stringify(cart));
        },[cart]);
        useEffect(()=>{
            axios("data.json").then((res)=> setData(res.data))
        },[]);

        const buyProducts =(product)=>{
            const productRepeat= cart.find((item) => item.id === product.id);
      
            if(productRepeat){
              setCart(cart.map((item)=> (item.id === product.id ? {...product, quanty: productRepeat.quanty + 1}: item)));
            } else {
              setCart([...cart,product]);
            }
             
              
          };
                 
        return <dataContex.Provider value={{data, cart, setCart, buyProducts}}>{children}</dataContex.Provider>
};

export default DataProvider;
