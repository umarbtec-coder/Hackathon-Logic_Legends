import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RoomAllocation from "./pages/RoomAllocation/RoomAllocation";
import Features from "./pages/Features/Features";
import Complaint from "./pages/Complaint/Complaint";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/room-allocation" element={<RoomAllocation />} />
          <Route path="/features" element={<Features />} />
          <Route path="/complaints" element={<Complaint />} />
        </Routes>
      </main>
    </>
  );
};

export default App;