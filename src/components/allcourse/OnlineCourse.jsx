import React from 'react'
import Title from '../common/heading/title/Title'
import { online } from '../../dummydate'
import "./course.css"
const OnlineCourse = () => {
  return (
    <>
      <section className="online">
        <div className="container">
            <Title subtitle="COURSES" title= "Browse Our Online Course"/>

            <div className="content grid3"></div>
            {online.map((val)=>(
              <div className="box">
                <div className="img">
                    <img src={val.cover} alt="" />
                    <img src= {val.hoverCover} alt="" className='show' />
                </div>
                <h1>{val.courseName} </h1>
                <span> {val.course}</span>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default OnlineCourse
