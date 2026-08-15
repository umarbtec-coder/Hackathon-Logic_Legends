import React from "react";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <section style={{ paddingTop: "120px", textAlign: "center" }}>
          <h1>Smart Hostel Management System</h1>
          <p>Smarter Hostel Management. Better Student Experience.</p>
        </section>
      </main>
    </>
  );
};

export default App;