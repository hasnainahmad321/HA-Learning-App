import { FaStar } from "react-icons/fa6"
import Title from "../components/common/heading/title/Title"
import { coursesCard } from "../dummydate"
const HAabout = () => {
  return (
    <>
    <section className="homeAbout">
        <div className="container">
            <Title subtitle='our courses' title='explore our popular online course'/>
            <div className="courseCard">
                <div className="grid3">
            {coursesCard.slice(0,3).map((val)=>{
                return(
                <div className="items">
                    <div className="content flex">
                    <div className="left">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                   </div>
                   <div className="text">
                    <h1>{val.coursesName} </h1>
                    <div className="rate">
                        <FaStar className="fa"/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                         <label htmlFor="">(5.0)</label>
                    </div>
                    {val.courTeacher.map((details)=>(
                        <>
                        <div className="box">
                            <div className="dimg">
                                <img src= {details.dcover} alt="" />
                            </div>
                            <div className="para">
                                <h4> {details.name} </h4>
                            </div>
                        </div>
                        <span> {details.totalTime} </span>
                        </>
                    ))}
                   </div>
                 </div>
                 <div className="price">
                    <h3>{val.pricePer} </h3>
                 </div>
                 <button className="outline-btn">Enroll Now</button>
                </div>
                )
            })}
            </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default HAabout
