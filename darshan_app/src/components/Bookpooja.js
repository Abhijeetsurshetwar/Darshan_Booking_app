                                                                                                                                 
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import Navbar from '../components/Navbar'; // Import Navbar
// import Footer from '../components/Footer'; // Import Footer

// export default function BookPooja() {
//   const userId = useSelector((state) => state.user.id); // Fetch user ID from Redux
//   const [date, setDate] = useState("");
//   const [slots, setSlots] = useState([]);
//   const [selectedSlot, setSelectedSlot] = useState("");
//   const [numPersons, setNumPersons] = useState(1);
//   const [totalAmount, setTotalAmount] = useState(500);

// const token = useSelector((state) => state.user.userinfo.token);
// console.log("Redux Token:", token);
// const userinfo = useSelector((state) => state.user.userinfo);
  
//   // Fetch available slots when date is selected
//   useEffect(() => {
//     if (date) {
//         console.log(`Fetching slots for date: ${date}`);
  
//         axios
//           .get("http://localhost:8062/schedules", {
//             headers: { Authorization: `Bearer ${token}` },
//           })
//           .then((res) => {
//             console.log("API Response:", res);
//             const poojaSchedule = res.data.find((item) => item.name === "Darshan");
  
//             if (poojaSchedule) {
//               const availableSlots =
//                 poojaSchedule.scheduleDates.find((schedule) => schedule.date === date)?.slots || [];
//               setSlots(availableSlots);
//               console.log("Filtered Slots:", availableSlots);
//             } else {
//               console.warn("No 'Darshan' schedule found.");
//             }
//           })
//           .catch((err) => console.error("Error fetching slots:", err));
//       }
//     }, [date, token]);

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

//     console.log("Submitting Booking Data:", bookingData);

//     try {
//         const response =  axios.post("http://localhost:8062/booking?date=${date}&slot=${selectedSlot}", bookingData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log("Booking Response:", response.data);
//         alert("🙏 Booking Successful! May Lord bless you! 🙏");
//       } catch (error) {
//         console.error("Booking failed:", error);
//         alert("Error while booking. Try again.");
//       }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('https://hindubhagwan.com/Gallery/images/portfolio/full/sai-baba-image.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <Navbar /> {/* Add Navbar here */}
//       <div
//         className="d-flex justify-content-center align-items-center min-vh-100"
//         style={{
//           background: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for the form
//         }}
//       >
//         <div
//           className="container p-4 rounded shadow-lg"
//           style={{
//             maxWidth: "600px",
//             border: "2px solid #FFC107",
//           }}
//         >
//           <h2 className="text-center text-danger">📿 Book Pooja</h2>

//           {/* Date Selection */}
//           <label className="fw-bold mt-3">Select Date:</label>
//           <input
//             type="date"
//             className="form-control"
//             min={new Date().toISOString().split("T")[0]}
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />

//           {/* Slot Selection */}
//           {date && (
//             <>
//               <label className="fw-bold mt-3">Available Slots:</label>
//               <select
//                 className="form-control"
//                 value={selectedSlot}
//                 onChange={(e) => setSelectedSlot(e.target.value)}
//               >
//                 <option value="">Select Slot</option>
//                 {slots.map((slot, index) => (
//                   <option key={index} value={slot.time}>
//                     {slot.time} - {slot.vacancies} vacancies
//                   </option>
//                 ))}
//               </select>
//             </>
//           )}

//           {/* Number of Persons & Total Amount */}
//           {selectedSlot && (
//             <>
//               <label className="fw-bold mt-3">No. of Persons:</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 min="1"
//                 value={numPersons}
//                 onChange={handlePersonsChange}
//               />
//               <p className="mt-2 text-success fw-bold">Total Amount: ₹{totalAmount}</p>
//             </>
//           )}

//           {/* Submit Button */}
//           <button className="btn btn-danger mt-4 w-100" onClick={handleBooking}>
//             Confirm Booking 🙏
//           </button>
//         </div>
//       </div>
//       <Footer /> {/* Add Footer here */}
//     </div>
//   );
// }

 
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

export default function BookPooja() {
  const userId = useSelector((state) => state.user.id); // Fetch user ID from Redux
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [availableVacancies, setAvailableVacancies] = useState(0);
  const [numPersons, setNumPersons] = useState(1);
  const [totalAmount, setTotalAmount] = useState(500);

  const token = useSelector((state) => state.user.userinfo.token);
  console.log("Redux Token:", token);
  const userinfo = useSelector((state) => state.user.userinfo);

  // Fetch available slots when date is selected
  useEffect(() => {
    if (date) {
      console.log(`Fetching slots for date: ${date}`);

      fetch("http://localhost:8062/schedules", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("API Response:", data);
          const poojaSchedule = data.find((item) => item.name === "Pooja");

          if (poojaSchedule) {
            const selectedDate = poojaSchedule.scheduleDates.find(
              (schedule) => schedule.date === date
            );
            const availableSlots = selectedDate ? selectedDate.slots : [];

            setSlots(availableSlots);
            console.log("Filtered Slots:", availableSlots);
          } else {
            console.warn("No 'Pooja' schedule found.");
          }
        })
        .catch((err) => console.error("Error fetching slots:", err));
    }
  }, [date, token]);

  // Handle slot selection and set available vacancies
  const handleSlotSelection = (e) => {
    const selectedTime = e.target.value;
    setSelectedSlot(selectedTime);

    const slotDetails = slots.find((slot) => slot.time === selectedTime);
    setAvailableVacancies(slotDetails ? slotDetails.vacancies : 0);
  };

  // Handle No. of Persons change
  const handlePersonsChange = (e) => {
    const persons = Math.min(parseInt(e.target.value) || 1, availableVacancies, 4);
    setNumPersons(persons);
    setTotalAmount(persons * 500);
  };

  // Handle Booking Submission
  const handleBooking = async () => {
    if (!date || !selectedSlot || numPersons < 1) {
      alert("Please fill all details before booking.");
      return;
    }

    const bookingData = {
      userName: userinfo.uname,
      date,
      slot: selectedSlot,
      totalDevotee: numPersons,
    };

    console.log("Submitting Booking Data:", bookingData);

    try {
      const response = await fetch(
        `http://localhost:8062/poojabooking?date=${date}&slot=${selectedSlot}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (!response.ok) throw new Error("Booking failed");

      const result = await response.json();
      console.log("Booking Response:", result);

      alert("🙏 Pooja Booking Successful! May Lord bless you! 🙏");

      // Generate the Ticket for Pooja Booking
      generateTicket({
        type: "Pooja",
        bookingId: result.bookingId,
        date,
        slot: selectedSlot,
        noOfPersons: numPersons,
      });
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Error while booking. Try again.");
    }
  };

  const generateTicket = (booking) => {
    const ticketWindow = window.open("", "_blank", "width=400,height=600");

    ticketWindow.document.write(`
      <html>
      <head>
        <title>${booking.type} Ticket</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
          .ticket-box { border: 2px solid #8B0000; padding: 20px; border-radius: 10px; width: 350px; margin: auto; background: #fff; }
          .btn-print { background: #8B0000; color: white; padding: 10px; border: none; border-radius: 5px; margin-top: 10px; cursor: pointer; font-size: 16px; }
        </style>
      </head>
      <body>
        <h2 style="color: #8B0000;">📜 ${booking.type} Ticket 📜</h2>
        <div class="ticket-box">
          <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
          <p><strong>Date:</strong> ${booking.date}</p>
          <p><strong>Slot:</strong> ${booking.slot}</p>
          <p><strong>No. of Persons:</strong> ${booking.noOfPersons}</p>
        </div>
        <button class="btn-print" onclick="window.print()">🖨 Print Ticket</button>
      </body>
      </html>
    `);
    ticketWindow.document.close();
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://hindubhagwan.com/Gallery/images/portfolio/full/sai-baba-image.jpg')",
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
                onChange={handleSlotSelection}
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
                max={Math.min(availableVacancies, 4)}
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
