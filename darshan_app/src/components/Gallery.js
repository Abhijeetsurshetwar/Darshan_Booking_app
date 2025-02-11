import React, { useState, useEffect } from "react";
import "../App.css"; // Import the CSS file for styles
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer"; // Import Footer

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { src: "http://saibabalives.org/assets/images/uniqueinfo/baba_holding_%20tukaram_gatha.gif" },
      { src: "https://www.trawell.in/admin/images/upload/000682325Shirdi_Sai_Temple_Main.jpg" },
      { src: "https://astrosagar.com/wp-content/uploads/2022/02/Shri-Shirdi-Sai-Baba-700x430.jpg" },
      { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiApyY64nSIG6wAmHzQq_9PS1SzpPmJsB_jQ&s" },
      { src: "https://www.holidify.com/images/bgImages/SHIRDI.jpg" },
      { src: "https://sai.org.in/sites/default/files/styles/photo_gallery/public/DSC_8028_0.JPG?itok=Pa_9Pqpr" },
      { src: "https://sai.org.in/sites/default/files/styles/photo_gallery/public/DSC_8232_0.JPG?itok=nMfx_2Vg" },
      { src: "https://sai.org.in/sites/default/files/styles/photo_gallery/public/DSC_9160.JPG?itok=q2i0xQIe"},
      { src: "https://sai.org.in/sites/default/files/styles/photo_gallery/public/DSC_9548.JPG?itok=v7kLtKb-"},
      { src: "https://sai.org.in/sites/default/files/styles/photo_gallery/public/DSC_9557.JPG?itok=qbP2bZ_I"},
      { src :"http://saibabalives.org/assets/images/uniqueinfo/saibaba_with_mahalsapthi.png"}
    ]);
  }, []);

  return (
    <div className="gallery-page">
      {/* Navbar */}
      <Navbar />

      {/* Top Banner Section */}
      <div className="gallery-banner">
        <h1 className="gallery-title">Photo Gallery</h1>
      </div>

      {/* Image Grid */}
      <div className="gallery-section">
        <div className="image-grid">
          {images.map((img, index) => (
            <div key={index} className="image-card">
            <img 
              src={img.src} 
             alt={img.caption} 
             className="gallery-image"
             onError={(e) => { e.target.onerror = null; e.target.src = "/fallback-image.jpg"; }} />
              <div className="image-overlay">
                <p className="image-caption">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
