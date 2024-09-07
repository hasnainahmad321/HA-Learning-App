import "./hero.css"
import Title from "../../components/common/heading/title/Title"
const Hero =()=> {
  return (
    <>
        <section className="hero">
            <div className="container">
                <div className="row">
                  <Title subtitle="Wellcome To HALearning" title= "Best online Education"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque debitis dolorum reiciendis</p>
                    <div className="button">
                        <button className="primary-btn">
                          Get Started Now <i className="fa fa-Long-arrow-alt-right"></i>
                          
                        </button>
                        <button className="primary-btn">
                          VIEW COurse <i className="fa fa-Long-arrow-alt-right"></i>
                          
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin"></div>
      
    </>
  )
}

export default Hero
