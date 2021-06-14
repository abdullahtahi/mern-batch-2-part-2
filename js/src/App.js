import './App.css';
import React,{ useState } from'react'
import Header from"./component/header/Header"
import Home from '../src/pages/home/Home'
function App() {
  const [state, setstate] = useState({
    title:"mouse",
    price:550,
    quantity:10
  })
   const update=()=>{
  setstate({...state,price:state.price+300}) 
  }
  return (
    <div className="container">
{/*        
      <Header/>
      <Home/> */}
<div>{state.title}</div>     
<div>{state.price}</div>
<div>{state.quantity}</div>     
<button onClick={update}>update price</button>


    </div>
);
}

export default App;
