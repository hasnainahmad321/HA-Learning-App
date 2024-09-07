import Back from "../common/back/Back"
import Faq from "./Faq"
import PriceCard from "./PriceCard"

import "./price.css"
const Price = () => {
  return (
    <>
     <Back title='Choose the right plan'/>
     <Faq/>
       
     <section className="price padding">
        <div className="container grid">
            <PriceCard/>
        </div>
        </section> 
        
    </>
  )
}

export default Price
