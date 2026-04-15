import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MapPage() {
  const locationData = useLocation();
  const navigate = useNavigate();

  const city = locationData.state?.city || "Chennai";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        color: "white",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "5px" }}>
          🗺️ Hotel Map
        </h1>
        <p style={{ fontSize: "16px", opacity: 0.9 }}>
          Explore hotels in <b>{city}</b>
        </p>
      </div>

      {/* Map Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "#fff",
          borderRadius: "20px",
          padding: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        }}
      >
        <iframe
          title="map"
          width="100%"
          height="500"
          style={{
            border: 0,
            borderRadius: "15px",
          }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${city}&output=embed`}
        ></iframe>
      </div>

      {/* Buttons */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={btnStyle("#ff9800")}
        >
          ⬅ Back Home
        </button>

        <button
          onClick={() => navigate("/hotels")}
          style={btnStyle("#28a745")}
        >
          🏨 View Hotels
        </button>
      </div>
    </div>
  );
}

// Reusable Button Style
const btnStyle = (bgColor) => ({
  padding: "12px 25px",
  fontSize: "15px",
  backgroundColor: bgColor,
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.3s",
});

export default MapPage;