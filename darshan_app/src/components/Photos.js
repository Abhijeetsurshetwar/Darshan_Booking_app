import React, { useState, useEffect } from "react";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
import './Photos.css'; // Import the CSS file for animations

const Photos = () => {
  const [images, setImages] = useState([]);
  const [showInfo, setShowInfo] = useState({});

  useEffect(() => {
    setImages([
      { src: image1, caption: "Ayodhya Mandir", info: "The Ayodhya Ram Mandir is..." },
      { src: image2, caption: "Mahalaxmi Mandir, Kolhapur", info: "The Mahalaxmi Temple in Kolhapur..." },
      { src: image3, caption: "Mahalaxmi Mandir", info: "The Mahalaxmi Temple is an architectural marvel..." },
      { src: image4, caption: "Dagdu Sheth Ganpati, Pune", info: "Shreemant Dagdusheth Halwai Ganpati is..." },
      { src: image5, caption: "ISKON Temple, Pune", info: "The ISKCON Temple in Pune is dedicated to..." },
      { src: image6, caption: "Grishneshwar Temple, Aurangabad", info: "Grishneshwar Temple, one of the 12 Jyotirlingas..." },
    ]);
  }, []);

  return (
    <div className="gallery-section">
      <h2 className="photos-title">Photos</h2>
      <div className="image-grid">
        {images.map((imgObj, index) => (
          <div key={index} className="image-card">
            <img 
              src={imgObj.src} 
              alt={imgObj.caption} 
              className="gallery-image"
              onError={(e) => { e.target.onerror = null; e.target.src="/fallback-image.jpg"; }}
            />
            <p className="photo-caption" onClick={() => setShowInfo({ ...showInfo, [index]: !showInfo[index] })}>
              {imgObj.caption}
            </p>
            <div className={`photo-info ${showInfo[index] ? 'show' : ''}`}>
              {imgObj.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
