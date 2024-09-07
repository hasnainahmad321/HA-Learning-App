
import Title from '../common/heading/title/Title'
import { homeAbout } from '../../dummydate'
import AWrapper from "./AWrapper"
import "./about.css"
const AboutCart = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className="container flexSB">
            <div className="left row">
                <img src="./public/images/about.webp" alt="" />
            </div>
            <div className="right row">
                <Title subtitle="Learning Anything" title="Benefits About Online Learning Expertise"/>
                <div className="items"> {homeAbout.map((val)=>(
                    <div className="items flexSB">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                            <h2>{val.title}</h2>
                            <p>{val.desc} </p>
                        </div>
                    </div>
                ))}</div>
            </div>
        </div>
        <AWrapper/>
      </section>
    </>
  )
}

export default AboutCart
