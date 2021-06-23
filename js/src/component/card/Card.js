import React,{useState} from 'react'
import card1 from '../../assert/card1.png'
import '../card/Card.css'
import { Link } from 'react-router-dom'
// import Data from "../../Data"
export default function Card(props) {
const [product, setproduct] = useState(props.pro)
  
return (
        <div className="col-md-4 cards-1"  className="col-lg-4 d-flex align-items-stretch">
            <div className="card">
  <img src={card1} className="card-img-top" alt="..."/>
  <div className="card-body bdy">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <Link to={`/product/${product.slug}`} className="btn btn-primary btns">Go somewhere</Link>
  </div>
</div>
        </div>
    )
}
