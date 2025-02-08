import React, { useState } from "react";
import { useSelector } from "react-redux"; //  Import useSelector to access Redux
import UserMenu from "../components/Navbar";
import Footer from "../components/Footer";

const Donation = () => {
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [donorName, setDonorName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  //  Get user info and token from Redux
  const userInfo = useSelector((state) => state.user.userinfo);
  const token = userInfo?.token; 
  const username = userInfo?.uname; 

  const reasons = [
    "Temple Development",
    "Annadanam (Food Donation)",
    "Education for Poor",
    "Medical Assistance",
    "Festival Celebrations",
    "Religious Rituals",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!amount || !reason || !donorName) {
      alert("Please fill all fields before donating.");
      return;
    }

    const donationData = {
      ammount: Number(amount), 
      purpose: reason, 
      user_name: username, 
    };
    

    try {
      const response = await fetch("http://localhost:8062/donation/bookdonation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(donationData),
      });
      

      if (!response.ok) {
        throw new Error("Donation failed. Please try again.");
      }

      console.log("✅ Donation successful:", await response.json());
      setSubmitted(true);
    } catch (error) {
      console.error("❌ Donation Error:", error.message);
      alert(error.message || "An unexpected error occurred.");
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
          background: `url('https://www.guruweshvarshani.org/wp-content/uploads/2023/09/north-indian-3d-temple-construction-6-e1695035810434.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          }}
        ></div>

        <div
          style={{
            position: "relative",
            background: "rgba(255, 255, 255, 0.9)",
            padding: "30px",
            borderRadius: "12px",
            maxWidth: "450px",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          {!submitted ? (
            <>
              <h2 style={{ color: "#8B0000", fontFamily: "Georgia, serif" }}>
                🙏 Make a Holy Contribution 🙏
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                />
                <input
                  type="number"
                  placeholder="Enter Donation Amount (₹)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                />
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                  }}
                >
                  <option value="">Select a Reason</option>
                  {reasons.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  style={{
                    background: "#8B0000",
                    color: "white",
                    border: "none",
                    padding: "12px",
                    width: "100%",
                    borderRadius: "6px",
                    fontSize: "18px",
                    cursor: "pointer",
                    marginTop: "10px",
                  }}
                >
                  Donate Now 🙌
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 style={{ color: "#8B0000", fontFamily: "Georgia, serif" }}>
                🎉 Thank You for Your Generosity! 🎉
              </h2>
              <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
                "None of our success would be possible without generous donors like you.
                <br />
                Thank you again for your commitment and kindness."
              </p>
              <h3 style={{ color: "#8B0000" }}>Thank You, {donorName}! 🙏</h3>
              <button
                onClick={() => setSubmitted(false)}
                style={{
                  background: "#8B0000",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  width: "100%",
                  borderRadius: "6px",
                  fontSize: "16px",
                  cursor: "pointer",
                  marginTop: "15px",
                }}
              >
                Make Another Donation
              </button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donation;
