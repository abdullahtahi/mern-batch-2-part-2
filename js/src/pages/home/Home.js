import React,{useState} from 'react'
import Slider from'../../component/slider/Slider'
import Card from '../../component/card/Card' 
import Footer from '../../component/footer/Footer'
function Home(props) {
const [product, setproduct] = useState(props.Product)
    return (
        <div>
            <Slider/>
           
           <div className="row md-4">
           <div style={{paddingTop:"30px",paddingBottom:"30px"}}></div>
    {
        product.map((p_loop,Ind)=><Card className="card" key={Ind} pro={p_loop} />)
        }
        

           </div> 
           <Footer/>
        </div>
    )
}
export default Home