import './App.css';
import React from'react'
import Header from"./component/header/Header"
import Home from '../src/pages/home/Home'
function App() {
  return (
    <div className="container">
       
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
