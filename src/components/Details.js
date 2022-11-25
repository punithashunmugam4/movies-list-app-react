import React from "react";
import { useState } from "react";
import './details.css';
import {useLocation} from 'react-router-dom'
import Confirm from "./Confirm";

const Details=()=>{
    const Location=useLocation();
    const bookedMovie=Location.state;

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [contact,setContact]=useState("");
    const [details,setDetails]=useState("");
    const [flag,setFlag]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFlag(true);
        setDetails({
            name:name,
            email:email,
            contact:contact,
            movie:bookedMovie[1],
            seats:bookedMovie[0],
            flag,
            setFlag
        })
    }
    return(
        <div className="personal-details">
            <form className="details-form" onSubmit={(e)=>handleSubmit(e)}>
                <label htmlFor="name">Name: </label>
                <input  name="name" id="name" placeholder="Type your full name" required onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <label htmlFor="email">Email: </label>
                <input name="email" id="email" type='email' placeholder="xxx@gmail.com" required onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <label htmlFor="contact">Contact: </label>
                <input name="contact" id="contact" type='tel' placeholder="91-2323454323" required onChange={(e)=>setContact(e.target.value)}/><br/><br/>
                <button className="details-btn">Submit</button>
            </form>
            {flag && <Confirm details={details}/>}
        </div>
    )
}

export default Details