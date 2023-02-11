import React from "react";
import { useState } from "react";
import { availability } from "../Data";
import "./seats.css";
import { Link, useLocation } from "react-router-dom";

const Seats = () => {
  const Location = useLocation();
  const bookedMovie = Location.state;
  const [selectedSeat, setSelectedSeat] = useState([]);
  // console.log(bookedMovie)
  const moviesSeats = availability.filter((name) => {
    return name.movie === bookedMovie;
  });
  // console.log(moviesSeats)
  const availableSeats = moviesSeats[0].seatsFilled;
  let section1 = [];
  for (let i = 1; i <= 25; i++) section1.push(i);
  let section2 = [];
  for (let i = 26; i <= 50; i++) section2.push(i);

  const handleSeat = (e) => {
    const seat = Number(e.target.id);
    if (e.target.classList.contains("available")) {
      if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
        if (selectedSeat.length === 1) {
          setSelectedSeat([]);
        } else {
          let temp = selectedSeat;
          temp.splice(temp.indexOf(seat), 1);
          setSelectedSeat(temp);
        }
      } else {
        e.target.classList.add("selected");
        setSelectedSeat([...selectedSeat, seat]);
      }
    }
  };
  console.log(selectedSeat.length);
  return (
    <div className="bookseats">
      <h2>Book your Seats</h2>
      <div className="allSeats">
        <div className="Seats-section-1">
          {section1.map((seat) => {
            return (
              <div
                key={"key" + seat}
                className={
                  availableSeats.includes(seat) ? "filled" : "available"
                }
                id={seat}
                onClick={(e) => handleSeat(e)}
              >
                {seat}
              </div>
            );
          })}
        </div>
        <div className="Seats-section-2">
          {section2.map((seat) => {
            return (
              <div
                key={"key" + seat}
                className={
                  availableSeats.includes(seat) ? "filled" : "available"
                }
                id={seat}
                onClick={(e) => handleSeat(e)}
              >
                {seat}
              </div>
            );
          })}
        </div>
      </div>
      {selectedSeat.length > 0 && (
        <Link to="/customer-details" state={[selectedSeat, bookedMovie]}>
          <button className="booking-btn">Book Seats</button>
        </Link>
      )}
    </div>
  );
};

export default Seats;
