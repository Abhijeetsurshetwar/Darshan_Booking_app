// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";

// export default function BookPooja() {
//   const userId = useSelector((state) => state.user.id); // Fetch user ID from Redux
//   const [date, setDate] = useState("");
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState("");
//   const [numPersons, setNumPersons] = useState(1);
//   const [totalAmount, setTotalAmount] = useState(500);
  
//   // Fetch available slots when date is selected
//   useEffect(() => {
//     if (date) {
//       axios
//         .get(`https://your-backend-api.com/get-slots?date=${date}`)
//         .then((response) => setSlots(response.data))
//         .catch((error) => console.error("Error fetching slots:", error));
//     }
//   }, [date]);

//   // Handle No. of Persons change
//   const handlePersonsChange = (e) => {
//     const persons = parseInt(e.target.value) || 1;
//     setNumPersons(persons);
//     setTotalAmount(persons * 500);
//   };

//   // Handle Booking Submission
//   const handleBooking = () => {
//     if (!date || !selectedSlot || numPersons < 1) {
//       alert("Please fill all details before booking.");
//       return;
//     }

//     const bookingData = {
//       userId,
//       date,
//       slot: selectedSlot,
//       numPersons,
//       totalAmount,
//     };

//     axios
//       .post("https://your-backend-api.com/book-pooja", bookingData)
//       .then(() => alert("Pooja booked successfully!"))
//       .catch((error) => console.error("Booking error:", error));
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center min-vh-100"
//       style={{
//         background: "linear-gradient(to bottom right,rgb(255, 255, 255),rgb(228, 122, 77),rgb(223, 133, 133))",
//       }}
//     >
//       <div
//         className="container p-4 rounded shadow-lg"
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           maxWidth: "600px",
//           border: "2px solid #FFC107",
//         }}
//       >
//         <h2 className="text-center text-danger">📿 Book Pooja</h2>

//         {/* Date Selection */}
//         <label className="fw-bold mt-3">Select Date:</label>
//         <input
//           type="date"
//           className="form-control"
//           min={new Date().toISOString().split("T")[0]}
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />

//         {/* Slot Selection */}
//         {date && (
//           <>
//             <label className="fw-bold mt-3">Available Slots:</label>
//             <select
//               className="form-control"
//               value={selectedSlot}
//               onChange={(e) => setSelectedSlot(e.target.value)}
//             >
//               <option value="">Select Slot</option>
//               {slots.map((slot, index) => (
//                 <option key={index} value={slot.time}>
//                   {slot.time} - {slot.vacancies} vacancies
//                 </option>
//               ))}
//             </select>
//           </>
//         )}

//         {/* Number of Persons & Total Amount */}
//         {selectedSlot && (
//           <>
//             <label className="fw-bold mt-3">No. of Persons:</label>
//             <input
//               type="number"
//               className="form-control"
//               min="1"
//               value={numPersons}
//               onChange={handlePersonsChange}
//             />
//             <p className="mt-2 text-success fw-bold">Total Amount: ₹{totalAmount}</p>
//           </>
//         )}

//         {/* Submit Button */}
//         <button className="btn btn-danger mt-4 w-100" onClick={handleBooking}>
//           Confirm Booking 🙏
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer

export default function BookPooja() {
  const userId = useSelector((state) => state.user.id); // Fetch user ID from Redux
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [numPersons, setNumPersons] = useState(1);
  const [totalAmount, setTotalAmount] = useState(500);
  
  // Fetch available slots when date is selected
  useEffect(() => {
    if (date) {
      axios
        .get(`https://your-backend-api.com/get-slots?date=${date}`)
        .then((response) => setSlots(response.data))
        .catch((error) => console.error("Error fetching slots:", error));
    }
  }, [date]);

  // Handle No. of Persons change
  const handlePersonsChange = (e) => {
    const persons = parseInt(e.target.value) || 1;
    setNumPersons(persons);
    setTotalAmount(persons * 500);
  };

  // Handle Booking Submission
  const handleBooking = () => {
    if (!date || !selectedSlot || numPersons < 1) {
      alert("Please fill all details before booking.");
      return;
    }

    const bookingData = {
      userId,
      date,
      slot: selectedSlot,
      numPersons,
      totalAmount,
    };

    axios
      .post("https://your-backend-api.com/book-pooja", bookingData)
      .then(() => alert("Pooja booked successfully!"))
      .catch((error) => console.error("Booking error:", error));
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://d3k1i85mml78tf.cloudfront.net/Blogs/1714808146917_post_image_5.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar /> {/* Add Navbar here */}
      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          background: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for the form
        }}
      >
        <div
          className="container p-4 rounded shadow-lg"
          style={{
            maxWidth: "600px",
            border: "2px solid #FFC107",
          }}
        >
          <h2 className="text-center text-danger">📿 Book Pooja</h2>

          {/* Date Selection */}
          <label className="fw-bold mt-3">Select Date:</label>
          <input
            type="date"
            className="form-control"
            min={new Date().toISOString().split("T")[0]}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Slot Selection */}
          {date && (
            <>
              <label className="fw-bold mt-3">Available Slots:</label>
              <select
                className="form-control"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
              >
                <option value="">Select Slot</option>
                {slots.map((slot, index) => (
                  <option key={index} value={slot.time}>
                    {slot.time} - {slot.vacancies} vacancies
                  </option>
                ))}
              </select>
            </>
          )}

          {/* Number of Persons & Total Amount */}
          {selectedSlot && (
            <>
              <label className="fw-bold mt-3">No. of Persons:</label>
              <input
                type="number"
                className="form-control"
                min="1"
                value={numPersons}
                onChange={handlePersonsChange}
              />
              <p className="mt-2 text-success fw-bold">Total Amount: ₹{totalAmount}</p>
            </>
          )}

          {/* Submit Button */}
          <button className="btn btn-danger mt-4 w-100" onClick={handleBooking}>
            Confirm Booking 🙏
          </button>
        </div>
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}