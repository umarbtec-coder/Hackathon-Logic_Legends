import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <section style={{ paddingTop: "120px", textAlign: "center" }}>
          <h1>Smart Hostel Management System</h1>
          <p>Smarter Hostel Management. Better Student Experience.</p>
        </section>
        <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
    </>
  );
};

export default App;