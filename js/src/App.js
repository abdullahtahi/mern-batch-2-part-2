import './App.css';
import React from'react'
import Header from"./component/header/Header"
import Home from '../src/pages/home/Home'
import {products} from "../src/Data";
import Login from "../src/pages/login/Login"
import Register from "../src/pages/register/Register"
import Notfound from '../src/pages/notfound/Notfound';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
function App() {

    return (
    <div className="container">
    <Router>
    <Header/>
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
           <Route exact path="*">
           <Notfound/>
           </Route>

       </Switch>

   </Router>
      
      
    </div>
);
}

export default App;
