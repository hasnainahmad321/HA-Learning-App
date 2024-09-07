import { FaFacebookF, FaInstagram, FaPaperPlane, FaTwitter,FaUser,FaCalendar, FaMap, FaPhone, FaHeart } from "react-icons/fa6"
import "./footer.css"
import { blog } from "../../dummydate"
import { FaMailBulk } from "react-icons/fa"

const Footer = () => {
  return (
    <>
     <section className="newletter">
        <div className="container flexSB">
            <div className="left row">
                <h1>The pupose od Our H.ALearnig Share <span>course and iformation those students which would online learn </span></h1>
            </div>
            <div className="right row">
                <input type="text" placeholder="Enter Email addres" />
                <FaPaperPlane className="fa"/>
            </div>
        </div>
        </section> 
        <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>Learning</h1>
                    <span>onlline education& learning</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quas earum rem architecto ratione quia exercitatio</p>
                    <FaFacebookF className="fab"/>
                    <FaInstagram className="fab"/>
                    <FaTwitter className="fab"/>
                
v
                </div>
                <div className="box link">
                    <h3> Quck links </h3>
                        <ul>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                            <li>About us</li>
                            
                        </ul>
                    
                </div>
                <div className="bxo">
                    <h3>Recent post</h3>
                     {blog.slice(0,3).map((val)=>{
                        <div className="items flexSB">
                            <div className="img">
                                <img src={val.cover} alt="" />
                            </div>
                            <div className="text">
                                
                         <span>
                            <FaUser className="fa fa-user"/>
                            <label htmlFor="">{val.type} </label>
                        </span>
                        <span>
                            <FaCalendar className="fa fa-calendar-alt"/>
                            <label htmlFor="">{val.date} </label>
                        </span>
                        <h4>{val.title} </h4>
                                
                            </div>
                        </div>
                     })}
                </div>
                <div className="box last">
                    <h3>Have a Question?</h3>
                    <ul>
                        <li>
                            <FaMap className="fa"/>
                            203 Fake  ST,mount View ,villege kang teh gujrat
                        </li>
                        <li>
                            <FaPhone className="fa"/>
                            +923365698
                        </li>
                        <li>
                            <FaMailBulk className="fa"/>
                            HA@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="legal">
            <p> copyright @2024 all right reserved | this templaste is made with <FaHeart className="fa"/> by OuterCoder </p>
        </div>
    </>
  )
}

export default Footer
