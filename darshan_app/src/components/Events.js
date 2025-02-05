import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../App.css"; // Import CSS for styling and animations

const festivals = [
  {
    title: "CHAITRA",
    description:
      "On the day of Gudhi Padva, i.e. first day of Chaitra month, there is a special worship at 5.00 in the morning. This is done by Trustees. There is a procession of the deity in the evening. Gudhees (colorful flags) are hoisted. The clergyman of the village reads the almanac.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJ6w3pZTP5yFhED4SGbEXT0a3Dcw8kxLRzA&s",
  },
  {
    title: "VAISHAKH",
    description:
      "On the occasion of Akshay Trutiya, i.e. third day of the month Vaishakh, Hursh Mahal in the temple premises is opened.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5yeFj2WtOVtbYtaXE2MUYJhF2BvNHGYyWg&s",
  },
  {
    title: "SHRAVAN",
    description:
      "Shravan month is dedicated to Lord Shiva. Devotees perform special Abhishek rituals and observe fasts on Mondays. Chanting of 'Om Namah Shivaya' echoes in the temple.",
    image: "https://imgk.timesnownews.com/story/Sawan_Shivratri_2020.jpg?tr=w-600,h-450,fo-auto",
  },
  {
    title: "BHADRAPADA",
    description:
      "In the month of Bhadrapad, Ganesh Chaturthi, also called Vinayaka Chavithi, is celebrated for 10 days every year.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3_T2iWZ-vle4QzC2jR3s4SKt_Gh_iHP63Q&s",
  },
  {
    title: "ASHWIN",
    description:
      "On the 8th day of the month of Ashwin, the goddesses Bhuvaneshwari, Kolambika, Nilambika etc., are offered special garments. On Dussera, arms and other deities are worshipped.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3sVya2IJYMfOkditIsvETasCLfa5nBtutA&s",
  },
  {
    title: "KARTIK",
    description:
      "On the day of Padva, trustees perform a special ritual at 5.00 in the morning. In the evening, a Golden mask is placed on the Shiva ling in the temple. The chariot of Trimbakraja is taken for a grand procession.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcIBc0m1_QcBouZPk7gtSkf2nfD5oIdKySw&s",
  },
  {
    title: "MAGH",
    description:
      "On Vasant Panchami, the deity is specially ornamented. On Mahashivaratri, a grand procession of Trimbakraja is taken through the village.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ri6af2RZii8eCsq1SWsPbIjqn0rbFR-1TQ&s",
  },
  {
    title: "FALGUN",
    description:
      "On Holi Purnima, Holikapoojan is performed. On the second day, Dhoolivandan, the deity is specially decorated. On Rangpanchami, colors are spread over the deity.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyvYy6hQ7Ge4QC24FI4OvyjFgoXkwe81AOlg&s",
  },
];

export default function Events() {
  return (
    <div className="events-page">
      {/* Navbar */}
      <Navbar />

      {/* Background with Overlay */}
      <div className="background-container">
        <div className="overlay"></div>
      </div>

      {/* Events Section */}
      <div className="container text-center py-5">
        <h2 className="section-title">🌟 Temple Festivals & Events 🌟</h2>
        <p className="section-subtitle">
          Experience the divine energy of our temple festivals celebrated with great devotion.
        </p>

        <div className="row justify-content-center">
          {festivals.map((festival, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div className="event-card">
                <div className="image-container">
                  <img src={festival.image} alt={festival.title} />
                  <div className="hover-overlay"></div>
                </div>
                <h4>{festival.title}</h4>
                <p>{festival.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
