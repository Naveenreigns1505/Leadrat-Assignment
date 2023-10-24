// // SelectionComponent.js
// import React, { useState } from "react";

// const SelectionComponent = () => {
//   const [seatType, setSeatType] = useState("Standard");
//   const [seatCount, setSeatCount] = useState(1);

//   const handleSeatTypeChange = (event) => {
//     setSeatType(event.target.value);
//   };

//   const handleSeatCountChange = (event) => {
//     setSeatCount(event.target.value);
//   };

//   return (
//     <div className="selection-component">
//       <div>
//         <label htmlFor="seatType">Select Seat Type:</label>
//         <select id="seatType" value={seatType} onChange={handleSeatTypeChange}>
//           <option value="Standard">Standard</option>
//           <option value="Premium">Premium</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="seatCount">Select Seat Count:</label>
//         <input
//           type="number"
//           id="seatCount"
//           value={seatCount}
//           onChange={handleSeatCountChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default SelectionComponent;



import { useState } from "react";
import SeatingLayout from "../Seating Layout";
import "./index.css";

const Selection = () => {
  const [tickets, setTickets] = useState(1);
  const [ticketType, setTicketType] = useState("Premium");
  
  const handleType = (event) => {
    setTicketType(event.target.value);
  }

  const handleTicket = (event) => {
    setTickets(event.target.value);
  }

  return (
    <div className="page-background">
      <div className="header-container">
        <div>
          <div className="movie-details">
            <h4>Mad (2023)&nbsp;</h4>
            <h4 className="circle">UA</h4>
          </div>
          <p className="location">Imax: Hyderabad | Today, 21 Oct, 02:00 PM</p>
        </div>
        <div className="right-container">
          <select onChange={handleType} value={ticketType}>
            <option value="Premium">Premium</option>
            <option value="Executive">Executive</option>
            <option value="Normal">Normal</option>
          </select>
          <select onChange={handleTicket} value={tickets}>
            <option value={1}>1 Ticket</option>
            <option value={2}>2 Tickets</option>
            <option value={3}>3 Tickets</option>
            <option value={4}>4 Tickets</option>
            <option value={5}>5 Tickets</option>
            <option value={6}>6 Tickets</option>
          </select>
        </div>
      </div>
      <div className="time-container">
          <button className="time active" type="button">02:00</button>
          <button className="time" type="button" disabled>06:00</button>
          <button className="time" type="button" disabled>09:00</button>
      </div>
      <SeatingLayout tickets={tickets} ticketType={ticketType} />
    </div>
  );
};

export default Selection;
