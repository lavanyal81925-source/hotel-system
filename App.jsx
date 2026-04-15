import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import HotelsPage from "./pages/HotelsPage";
import RoomsPage from "./pages/RoomsPage";
import BookingForm from "./pages/BookingForm";
import ThankYou from "./pages/ThankYou";
import MapPage from "./pages/MapPage"; 

function App() {
  return (
    <BrowserRouter>

      {/* Optional Debug Bar (remove in final project) */}
      {/* 
      <div style={{ background: "red", color: "white", padding: "10px", textAlign: "center" }}>
        System Check: App is Loading!
      </div> 
      */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;