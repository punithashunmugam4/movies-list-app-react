import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { availability } from "../Data";
import {Link} from 'react-router-dom';

const Confirm=({details})=>{
    const [success,setSuccess]=useState(false);
    const handleConfirm=()=>{
        availability.forEach((item)=>{
            if(item.movie===details.movie){
                details.seats.forEach((i)=>{
                    item.seatsFilled.push(i)
                })
            }
        })
        setSuccess(true);
    }
    console.log(availability)
    return ReactDOM.createPortal(
        <div className="container-portal">
        {!success ? <div className="confirm-details">
                    <p>Name: {details.name}</p> 
                    <p>Email: {details.email}</p>
                    <p>Contact: {details.contact}</p>
                    <p>Movie: {details.movie}</p>
                    <p>Booked Seats: {details.seats.map((seat,index)=>{
                       if(index<details.seats.length-1) return  <span key={seat}>{seat},</span>
                       else return <span>{seat}.</span>
                    })}</p>
                    <button className="confirm-btn" onClick={handleConfirm}>Confirm Details</button>
         </div>:<div className="confirm"><h1>Hi Mr.{details.name},<br/>Seats Confirmed Successfully!!</h1>
         <Link to='/'><button className="to-home-btn">Go to HomePage</button></Link></div>}
         <div className="close-btn" onClick={()=>{details.setFlag(false)}}>x</div></div>,document.getElementById("root-portal")
    )
}

export default Confirm