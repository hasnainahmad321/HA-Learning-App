import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa6'
import { team } from '../../dummydate'
import "./team.css"
const TeamCard = () => {
  return (
    <>
    {team.map((val)=>(
        <div className="items shadow">
            <div className="img"><img src={val.cover} alt="" />
            <div className="overLay">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon"/>
            <FaYoutube className="icon" />
               </div>
            </div>
            <div className="details">
                <h2>{val.name}</h2>
                <p> {val.work}</p>
            </div>
        </div>
    ))}
    </>
  )
}

export default TeamCard
