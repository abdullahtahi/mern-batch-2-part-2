import './App.css';
import React from'react'
import Header from"./component/header/Header"
import Home from '../src/pages/home/Home'
import {products} from "../src/Data";
import Login from "../src/pages/login/Login"
import Register from "../src/pages/register/Register"
import Notfound from '../src/pages/notfound/Notfound';
import Detailpage from './pages/detailpage/Detailpage'
import Product from '../src/pages/product/Product'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {

    return (
    <div className="container">
    <Router>
    <Header Products={products}/>
       <Switch>
           <Route exact path="/account/Login">
           <Login/>
           </Route>
           <Route exact path="/account/register">
           <Register/>
           </Route>
           <Route exact path="/">
           <Home Product={products}/> 
           </Route>
           <Route exact path="/product/:slug">
            <Detailpage/>            
            </Route>
            <Route  exact path="/collection/:col ">
          <Product/>
        </Route>
         <Route exact path="*">
           <Notfound/>
           </Route>
           
       </Switch>

   </Router>
      
      
    </div>
);
}

export default App;
