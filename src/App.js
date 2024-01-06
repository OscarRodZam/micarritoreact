import Home from "./componets/Home/home.js";
import CartContent from "./componets/CartComponent/CartComponent";
import DataProvider from "./componets/Context/DataContex"
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
return(

<DataProvider>
<BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/cart" element={ <CartContent />} />
        
        
            </Routes>
</BrowserRouter>
</DataProvider>

);
};

export default App;
