import { FaStar } from "react-icons/fa6"
import "./course.css"
import { coursesCard} from "../../dummydate"


const CourseCard = () => {
  return (
    <>
     <section className="coursesCard">
        <div className="container grid2">
            {coursesCard.map((val)=>{
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
     </section>
    </>
  )
}

export default CourseCard
