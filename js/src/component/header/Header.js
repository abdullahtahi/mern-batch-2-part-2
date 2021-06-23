import "../header/Header.css"
import React from'react'
import kfclogo from'../../assert/kfclogo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";function Header(){
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
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">EVERYDAY VALUE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MAKE IT A MEAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SIGNATURE BOXES </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SHARING</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PROMOTIONS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SNACKES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MID NIGHT DEALS</a>
        </li>
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
