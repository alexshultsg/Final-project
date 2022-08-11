
import './App.css';
import "react-toastify/dist/ReactToastify.css";

import Navbar from './Navbar';
import { ToastContainer } from "react-toastify";
import { Route,Routes } from "react-router-dom"
import Cart from './Cart';
import Home from './Home';
import Checkout from './Checkout';
import Main from './Main';



function App() {
  return (
    <div className="App">
      <h3 className="order">Free shipping on orders $35+</h3>
      <hr/>
      <h1>Bike Store</h1>
      
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path = "/cart" element = {<Cart/>}/>
        <Route path = "/home" element = { <Home/>}/>
        <Route path = "/checkout" element = { <Checkout/>}/>
        <Route path = "/" element = {<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
