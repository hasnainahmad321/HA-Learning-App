import { blog } from "../../dummydate"
import { FaUser,FaCalendar,FaComment } from "react-icons/fa6"
import "./blog.css"

const BlogCard = () => {
  return (
    <>
     {blog.map((val)=>{
        return (
            <div className="items shadow">
                <div className="img">
                    <img src={val.cover} alt="" />
                </div>
                <div className="text">
                    <div className="admin flexSB">
                        <span>
                            <FaUser className="fa fa-user"/>
                            <label htmlFor="">{val.type} </label>
                        </span>
                        <span>
                            <FaCalendar className="fa fa-calendar-alt"/>
                            <label htmlFor="">{val.date} </label>
                        </span>
                        <span>
                            <FaComment className="fa fa-comments"/>
                            <label htmlFor="">{val.com} </label>
                        </span>
                    </div>
                    <h1>{val.title} </h1>
                    <p>{val.desc} </p>
                </div>
            </div>
        )
     })} 
    </>
  )
}

export default BlogCard
