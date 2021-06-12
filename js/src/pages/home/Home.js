import React from 'react'
import Slider from'../../component/slider/Slider'
import Card from '../../component/card/Card' 
import Footer from '../../component/footer/Footer'
function Home() {
    return (
        <div>
            <Slider/>
           
           <div className="row md-4">
           <div style={{paddingTop:"30px",paddingBottom:"30px"}}></div>
           <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

           </div> 
           <Footer/>
        </div>
    )
}
export default Home