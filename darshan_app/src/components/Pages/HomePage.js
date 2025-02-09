
import React, { useEffect } from "react"; 
import { useSelector } from "react-redux"; 
import Footer from "../Footer";
import Frontpage from "../Frontpage";
import Navbar from "../Navbar";

export default function HomePage() {
  
    const userInfo = useSelector((state) => state.user.userinfo);
    const token = userInfo?.token; //

    useEffect(() => {
        if (token) {
            console.log("✅ Token successfully received in Redux:", token);
        } else {
            console.log("❌ Token NOT received in Redux");
        }
    }, [token]); 

    return (
        <div className="container-fluid">
            <Navbar />
            <Frontpage />
            <Footer />
        </div>
    );
}

