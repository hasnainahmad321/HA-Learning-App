
import Title from '../components/common/heading/title/Title'
import { blog } from '../dummydate'
const Hblog = () => {
  return (
    <div>
      <section className="blog">
        <div className="container">
            <Title subtitle='our blogs' title='recent from blog'/>
            <div className="grid2">
     {blog.slice(0,3).map((val)=>{
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
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hblog
