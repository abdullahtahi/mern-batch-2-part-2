import "../header/Header.css"
import React ,{useState} from'react'
import kfclogo from'../../assert/kfclogo.png'
 import {catagorys} from "../../Data";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function Header(){
  
return (
        <div className="header-wrapper" >
            <div className="header-inner">
    <div className="item">
   <Link to="/"><img src={kfclogo}alt=""/></Link>
    
    </div>
    <div className="item">
<ul>
    <li><Link to="/account/Login">setlocation</Link></li>
    <li><Link to="/account/register">Register/signup</Link></li>
</ul>
</div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
        < Link to='/collection/everyday-value' class="nav-link active">EVERYDAY VALUE</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/make-it-meal' class="nav-link">MAKE IT A MEAL</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/Signature-boxes' class="nav-link">SIGNATURE BOXES </Link>
        </li>
        <li class="nav-item">
          <Link  to="/collection/Sharing"class="nav-link">SHARING</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/promotions' class="nav-link">PROMOTIONS</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/Snackes'class="nav-link">SNACKES</Link>
        </li>
        <li class="nav-item">
          <Link  to='/collection/mid-night-deals' class="nav-link">MID NIGHT DEALS</Link>
        </li> */}
        {
       catagorys.map((loop)=>< Link to={`/collection/${loop.category}`} class="nav-link ">{loop.title}</Link>)
        }
        </ul>
         <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">0</a>
        </li>
        </ul>
     
    </div>
  </div>
</nav>

        </div>
        )}
export default Header
