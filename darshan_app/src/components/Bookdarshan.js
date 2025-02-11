import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../App.css";
import UserMenu from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookDarshan() {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [numPersons, setNumPersons] = useState(1);
  const [devotees, setDevotees] = useState([]);
  const [totalAmount, setTotalAmount] = useState(200);
  const [formValid, setFormValid] = useState(false);
  const [maxVacancies, setMaxVacancies] = useState(5);

  const token = useSelector((state) => state.user.userinfo.token);
  const userinfo = useSelector((state) => state.user.userinfo);

  useEffect(() => {
    if (date) {
      axios
        .get("http://localhost:8060/schedules/getschedules", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const darshanSchedule = res.data.find((item) => item.name === "Darshan");
          if (darshanSchedule) {
            const availableSlots =
              darshanSchedule.scheduleDates.find((schedule) => schedule.date === date)?.slots || [];
            setSlots(availableSlots);
          }
        })
        .catch((err) => console.error("Error fetching slots:", err));
    }
  }, [date, token]);

  useEffect(() => {
    setTotalAmount(numPersons * 200);
    const updatedDevotees = Array.from({ length: numPersons }, (_, i) => ({
      id: i + 1,
      name: "",
      age: "",
      gender: "",
      idCard: "",
    }));
    setDevotees(updatedDevotees);
  }, [numPersons]);

  useEffect(() => {
    setFormValid(devotees.every((d) => d.name && d.age && d.gender && /^\d{12}$/.test(d.idCard)));
  }, [devotees]);

  const handleDevoteeChange = (index, field, value) => {
    const updatedDevotees = [...devotees];
    updatedDevotees[index][field] = value;
    setDevotees(updatedDevotees);
  };

  const handleSlotChange = (e) => {
    const selectedSlotTime = e.target.value;
    setSelectedSlot(selectedSlotTime);

    const slotData = slots.find((slot) => slot.time === selectedSlotTime);
    if (slotData) {
      const availableVacancies = slotData.vacancy;
      const maxAllowed = Math.min(availableVacancies, 5);
      setMaxVacancies(maxAllowed);
      if (numPersons > maxAllowed) {
        setNumPersons(maxAllowed);
        alert(`⚠️ Only ${maxAllowed} vacancies are available! You can book for up to ${maxAllowed} people.`);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const bookingData = {
      userName: userinfo.uname,
      date,
      slot: selectedSlot,
      totalDevotee: numPersons,
      devoteeNames: devotees.map((devotee) => ({
        devoteeName: devotee.name,  // 🔹 Fixed field name
        age: parseInt(devotee.age, 10),
        gender: devotee.gender,
        aadharNumber: devotee.idCard, // 🔹 Fixed field name
      })),
    };
  
    console.log("Submitting Booking Data:", bookingData);
  
    try {
      const response = await axios.post(
        `http://localhost:8060/booking/darshanbooking?date=${date}&slot=${selectedSlot}`,
        bookingData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      console.log("Booking Response:", response.data);
      alert("🙏 Booking Successful! May Lord bless you! 🙏");
  
      // 🎟 Generate the Ticket for Darshan Booking
      generateTicket({
        type: "Darshan",
        bookingId: response.data.bookingId,
        userName: userinfo.uname, // 🔹 Pass user name
        date,
        slot: selectedSlot,
        noOfPersons: numPersons,
        devoteeNames: bookingData.devoteeNames, // 🔹 Pass corrected devotee names
      });
  
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Error while booking. Try again.");
    }
  };
  const generateTicket = (booking) => {
    const ticketWindow = window.open("", "_blank", "width=400,height=600");
  
    if (!ticketWindow) {
      alert("Popup blocked! Please allow popups to generate the ticket.");
      return;
    }
  
    let devoteeDetails = "";
    if (booking.type === "Darshan") {
      devoteeDetails = booking.devoteeNames
        .map(
          (devotee, index) =>
            `<p><strong>Devotee ${index + 1}:</strong> ${devotee.devoteeName} (${devotee.age} yrs, ${devotee.gender}, Aadhar: ${devotee.aadharNumber})</p>`
        )
        .join("");
    }
  
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
          <p><strong>User Name:</strong> ${booking.userName}</p>  <!-- 🔹 Added User Name -->
          <p><strong>Date:</strong> ${booking.date}</p>
          <p><strong>Slot:</strong> ${booking.slot}</p>
          <p><strong>No. of Persons:</strong> ${booking.noOfPersons}</p>
          ${devoteeDetails}
        </div>
        <button class="btn-print" onclick="window.print()">🖨 Print Ticket</button>
      </body>
      </html>
    `);
    ticketWindow.document.close();
  };
  

  return (
    <>
      <UserMenu />
      <div className="booking-container">
        <div className="booking-form">
          <h2>🙏 Book Your Darshan 🙏</h2>
          
          <div className="input-group">
            <label>Select Date:</label>
            <input
              type="date"
              className="form-control"
              min={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          
          {date && (
            <div className="input-group">
              <label>Select Slot:</label>
              <select className="form-control" onChange={handleSlotChange} required>
                <option value="">-- Select Slot --</option>
                {slots.map((slot) => (
                  <option key={slot.id} value={slot.time}>
                    {slot.time} (Vacancies: {slot.vacancy})
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedSlot && (
            <>
              <div className="input-group">
                <label>Number of Persons:</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max={maxVacancies}
                  value={numPersons}
                  onChange={(e) => setNumPersons(parseInt(e.target.value))}
                  required
                />
              </div>

              <p className="amount-display">💰 Total Amount: ₹{totalAmount}</p>

              <h3>Devotee Details</h3>
              <table className="devotee-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Aadhar Number</th>
                  </tr>
                </thead>
                <tbody>
                  {devotees.map((devotee, index) => (
                    <tr key={devotee.id}>
                      <td>{devotee.id}</td>
                      <td>
                        <input
                          type="text"
                          value={devotee.name}
                          onChange={(e) => handleDevoteeChange(index, "name", e.target.value)}
                          className="form-control"
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={devotee.age}
                          onChange={(e) => handleDevoteeChange(index, "age", e.target.value)}
                          className="form-control"
                          required
                        />
                      </td>
                      <td>
                        <select
                          value={devotee.gender}
                          onChange={(e) => handleDevoteeChange(index, "gender", e.target.value)}
                          className="form-control"
                          required
                        >
                          <option value="">-- Select Gender --</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={devotee.idCard}
                          onChange={(e) => handleDevoteeChange(index, "idCard", e.target.value)}
                          className="form-control"
                          required
                          pattern="\d{12}"
                          title="Aadhar number must be exactly 12 digits."
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button className="btn-book" disabled={!formValid} onClick={handleSubmit}>
                ✨ Confirm Booking ✨
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
