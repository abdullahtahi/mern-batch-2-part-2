import React from 'react'
import { useParams } from 'react-router'
import {products} from "../../Data"
import card1 from '../../assert/card1.png'
import "../detailpage/Detailpage.css"
export default function Detailpage() {
    let { slug } = useParams();
const p=products.find((ploop)=>ploop.slug===slug)
// const S=products.filter((ploop)=>ploop.slug===slug)
// console.log(S);
// console.log(p);

return (
        <div className="main">
            <div>
         <img src={card1}alt=""/>   
         </div>
         <div>
            <h1>{p.title}</h1>
             <p>{p.description}</p>
            <h1>{p.price}</h1>
            <h1>{p.stock}</h1>
            </div>
        </div>
    )
}
