
import {  Routes, Route } from "react-router";
import './App.css'
import Home from "./components/pages/Home";
import RootLayout from "./components/layout/RootLayout";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Product_inside from "./components/pages/Product_inside";
import Login from "./components/pages/Login";
import SignUP from "./components/pages/SignUP";
import MyAccount from "./components/pages/MyAccount";
import Cart from "./components/pages/Cart";
import CheckOut from "./components/pages/CheckOut";
import E404 from "./components/pages/E404";


function App() {


  return (
    <>
      <Routes>
        <Route  element={<RootLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product_inside" element={<Product_inside/>} />
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUP/>} />
          <Route path="/myaccount" element={<MyAccount/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/e404" element={<E404/>} />
       
        </Route>
      </Routes>



    </>
  )
}

export default App
