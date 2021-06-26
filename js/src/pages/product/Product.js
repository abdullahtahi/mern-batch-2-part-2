import React from 'react'
import '../product/Product.css'
import Card from '../../component/card/Card'
import { useParams } from 'react-router'
import { products} from '../../Data';
export default function Product() {
    let {col} = useParams();
const pro=products.filter((loop)=>loop.category===col)
    return (

<div className="row">
    
            <h1 className="head">{col}</h1>
    
{    pro.map((loops,i)=><Card className="card " key={i} pro={loops} />)}
</div>
    )
}
