import { availability } from "../Data"
import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Home=()=>{
    const [bookedMovie,setBookedMovie]=useState("")
    console.log(bookedMovie)
return(
    <div id='movies-list'>
      {
        availability.map((movie)=>{
            // console.log(movie.movie)
        return (
                <div className='movie' key={movie.id} onClick={()=>{setBookedMovie(movie.movie)}}>
            <img
              variant="top"
              src={movie.imgUrl}
              alt="image1"
            />
            <div>
              <h3 className='title'>{movie.movie}</h3>
            </div>
           {bookedMovie===movie.movie && <Link state={bookedMovie}  to='/book-ticket'>
                <button className="selectMovie-btn">Book Ticket</button>
            </Link>}
          </div>
    )
        })
      }
      </div>
)}

export default Home