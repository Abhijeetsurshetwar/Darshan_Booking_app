import React, { useState } from "react";
import Photos from "./Photos"; // Keep the import for Photos
import Navbar from "./Navbar"; // Import Navbar
import Footer from "./Footer"; // Import Footer
import '../App.css'; // Assuming a separate CSS file for Gallery styles

const Gallery = () => {
  const [showPhotos, setShowPhotos] = useState(false); // State to manage visibility

  const togglePhotos = () => {
    setShowPhotos(!showPhotos); // Toggle the visibility
  };

  return (
    <div className="gallery-container" style={{ backgroundImage: `url('./BGimage.jpg')` }}>
      <Navbar />
      <h2 onClick={togglePhotos} style={{ cursor: 'pointer' }}>Gallery</h2>
      {showPhotos && <Photos />} {/* Conditionally render the Photos component */}
      <Footer />
    </div>
  );
};

export default Gallery;
