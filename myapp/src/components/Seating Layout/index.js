// // SeatingLayout.js
// import React, { useState, useEffect } from "react";
// import Seat from "../Seat";

// function SeatingLayout()  {
//   const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     fetch("/seats")
//       .then((res) => res.json())
//       .then((data) => setSeats(data))
//       .catch((error) => console.error("Error fetching seats:", error));
//   }, []);

//   const handleSeatSelection = (seat) => {
//     // Logic to handle seat selection
//   };

//   return (
//     <div className="seating-layout">
//       {seats.map((seat) => (
//         <Seat
//           key={seat.id}
//           seatNumber={seat.seatNumber}
//           type={seat.type}
//           status={seat.status}
//           onClick={() => handleSeatSelection(seat)}
//         />
//       ))}
//     </div>
//   );
// };

// export default SeatingLayout;




import { useState, useEffect } from "react";
import Seat from '../Seat';
import "./index.css";

const SeatingLayout = (props) => {
  const { tickets, ticketType } = props;
  const [seatsArray, setSeatsArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `http://localhost:5000/seats`;
        const response = await fetch(url);
        if(response.ok === true) {
            const data = await response.json();
            setSeatsArray(data.seats);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);
  return (
      <Seat tickets={tickets} ticketType={ticketType} seatsArray={seatsArray} />
  )
};

export default SeatingLayout;