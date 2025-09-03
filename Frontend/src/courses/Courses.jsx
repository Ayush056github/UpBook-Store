import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Signup from "../components/Signup";

function Courses() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center">
        <Course />

        
        <button
          className="btn bg-pink-500 text-white mt-6"
          onClick={() => setShowModal(true)}
        >
          Open Signup
        </button>
      </div>

      <Footer />

     
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <Signup closeModal={() => setShowModal(false)} />
        </div>
      )}
    </>
  );
}

export default Courses;
