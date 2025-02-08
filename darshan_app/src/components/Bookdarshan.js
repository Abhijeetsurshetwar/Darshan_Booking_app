
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

  const token = useSelector((state) => state.user.userinfo.token);
  console.log("Redux Token:", token);
  const userinfo = useSelector((state) => state.user.userinfo);

  useEffect(() => {
    if (date) {
      console.log(`Fetching slots for date: ${date}`);

      axios
        .get("http://localhost:8062/schedules", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("API Response:", res);
          const darshanSchedule = res.data.find((item) => item.name === "Darshan");

          if (darshanSchedule) {
            const availableSlots =
              darshanSchedule.scheduleDates.find((schedule) => schedule.date === date)?.slots || [];
            setSlots(availableSlots);
            console.log("Filtered Slots:", availableSlots);
          } else {
            console.warn("No 'Darshan' schedule found.");
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
    setFormValid(devotees.every((d) => d.name && d.age && d.gender && d.idCard));
  }, [devotees]);

  const handleDevoteeChange = (index, field, value) => {
    const updatedDevotees = [...devotees];
    updatedDevotees[index][field] = value;
    setDevotees(updatedDevotees);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      userName: userinfo.uname,
      date,
      slot: selectedSlot,
      totalDevotee: numPersons,
      devoteeNames: devotees.map((devotee) => ({
        devoteeName: devotee.name,
        age: parseInt(devotee.age, 10),
        gender: devotee.gender,
        aadharNumber: devotee.idCard,
      })),
    };

    console.log("Submitting Booking Data:", bookingData);

    try {
      const response = await axios.post("http://localhost:8062/booking?date=${date}&slot=${selectedSlot}", bookingData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Booking Response:", response.data);
      alert("🙏 Booking Successful! May Lord bless you! 🙏");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Error while booking. Try again.");
    }
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
              <select className="form-control" onChange={(e) => setSelectedSlot(e.target.value)} required>
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
                  value={numPersons}
                  onChange={(e) => setNumPersons(parseInt(e.target.value))}
                  required
                />
                
              </div>
              <div> 
              <p className="amount-display">💰 Total Amount: ₹{totalAmount}</p>
              </div>

              <div>
                <h3>Devotees Details</h3>
                {devotees.map((devotee, index) => (
                  <div key={devotee.id} className="devotee-form">
                    <label>Devotee Name:</label>
                    <input
                      type="text"
                      value={devotee.name}
                      onChange={(e) => handleDevoteeChange(index, "name", e.target.value)}
                      className="form-control"
                    />
                    <label>Age:</label>
                    <input
                      type="number"
                      value={devotee.age}
                      onChange={(e) => handleDevoteeChange(index, "age", e.target.value)}
                      className="form-control"
                    />
                    <label>Gender:</label>
                    <select
                      value={devotee.gender}
                      onChange={(e) => handleDevoteeChange(index, "gender", e.target.value)}
                      className="form-control"
                    >
                      <option value="">-- Select Gender --</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <label>Aadhar Number:</label>
                    <input
                      type="text"
                      value={devotee.idCard}
                      onChange={(e) => handleDevoteeChange(index, "idCard", e.target.value)}
                      className="form-control"
                    />
                  </div>
                ))}
              </div>

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