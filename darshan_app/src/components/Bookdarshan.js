import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "../App.css";
import UserMenu from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookDarshan() {
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [numPersons, setNumPersons] = useState(1);
  const [devotees, setDevotees] = useState([
    { id: 1, name: "", age: "", gender: "", idCard: "" },
  ]);
  const [totalAmount, setTotalAmount] = useState(200);

  useEffect(() => {
    if (date) {
      axios
        .get(`http://localhost:8080/api/slots?date=${date}`)
        .then((res) => setSlots(res.data))
        .catch((err) => console.error("Error fetching slots:", err));
    }
  }, [date]);

  useEffect(() => {
    setTotalAmount(numPersons * 200);
    setDevotees(
      Array.from({ length: numPersons }, (_, i) => ({
        id: i + 1,
        name: "",
        age: "",
        gender: "",
        idCard: "",
      }))
    );
  }, [numPersons]);

  const handleDevoteeChange = (index, field, value) => {
    const updatedDevotees = [...devotees];
    updatedDevotees[index][field] = value;
    setDevotees(updatedDevotees);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { date, slot: selectedSlot, numPersons, totalAmount, devotees };

    try {
      await axios.post("http://localhost:8080/api/book-darshan", bookingData);
      alert("🙏 Booking Successful! May Lord bless you! 🙏");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Error while booking. Try again.");
    }
  };

  return (
    <>
      <UserMenu />
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: `url('https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U=')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        
        <div
          style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.9)",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "600px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            marginTop: "50px",
          }}
        >
          <h2 style={{ color: "#8B0000", fontFamily: "Georgia, serif" }}>🙏 Book Your Darshan 🙏</h2>
          
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
                    {slot.time} (Vacancies: {slot.vacancies})
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
                  onChange={(e) => setNumPersons(e.target.value)}
                  required
                />
                <p className="amount-display">💰 Total Amount: ₹{totalAmount}</p>
              </div>

              <button className="btn-book" onClick={handleSubmit}>
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
