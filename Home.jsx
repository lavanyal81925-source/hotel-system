import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 
  
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault(); 
    
    if (name.trim() && date && location) {
      setError('');

      const formattedName = name
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());

      navigate('/hotels', { 
        state: { 
          userName: formattedName, 
          bookingDate: date, 
          city: location 
        } 
      });
    } else {
      setError("Please enter all details");
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      
      {/* Overlay */}
      <div style={overlayStyle}></div>

      {/* Main Container */}
      <div style={containerStyle}>
        
        {/* Heading */}
        <h1 style={titleStyle}>🏨 online Hotel Booking</h1>
        <p style={subtitleStyle}>Your comfort is our priority</p>

        {/* Action Buttons */}
        <div style={buttonRow}>
          <button
            onClick={() => navigate('/map', { state: { city: location } })}
            style={mapBtn}
          >
            🗺️ View Map
          </button>

          <button
            onClick={() => navigate('/hotels')}
            style={hotelBtn}
          >
            🏨 Browse Hotels
          </button>
        </div>

        {/* Login Card */}
        <div style={cardStyle}>
          <h2 style={{ color: '#333' }}>Login to Continue</h2>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <form onSubmit={handleSignIn} style={formStyle}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={inputStyle}
            />

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={inputStyle}
            >
              <option value="">Select City</option>
              <option>Visakhapatnam</option>
              <option>Vijayawada</option>
              <option>Hyderabad</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
              <option>Chennai</option>
              <option>Kolkata</option>
              <option>Delhi</option>
            </select>

            <button type="submit" style={loginBtn}>
              🔐 Find Hotels
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

/* Styles */
const overlayStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.65)'
};

const containerStyle = {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  maxWidth: '900px',
  textAlign: 'center',
  color: 'white',
  padding: '20px'
};

const titleStyle = {
  fontSize: '34px',
  marginBottom: '8px'
};

const subtitleStyle = {
  marginBottom: '25px',
  opacity: 0.9
};

const buttonRow = {
  marginBottom: '25px',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  flexWrap: 'wrap'
};

const cardStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '30px',
  borderRadius: '15px',
  backgroundColor: 'rgba(255,255,255,0.95)',
  boxShadow: '0 8px 25px rgba(0,0,0,0.4)'
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px'
};

const inputStyle = {
  padding: '12px',
  fontSize: '15px',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

const loginBtn = {
  padding: '12px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const mapBtn = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

const hotelBtn = {
  padding: '10px 20px',
  backgroundColor: '#ff9800',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Home;