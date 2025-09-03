import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../assets/Banner"; // ✅ correct folder name

import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
      
    </>
  );
}

export default Home;
