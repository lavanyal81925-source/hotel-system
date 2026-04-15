import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { hotels } from '../data/hotelsData';

const HotelsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const searchData = location.state || {};
  const city = searchData.city || "your destination";

  // Filter the hotels: Show hotels specifically for the city, PLUS the common ones ("All")
  const availableHotels = hotels.filter(hotel => hotel.city === city || hotel.city === "All");

  const handleHotelSelect = (hotelName) => {
    // Send the user to the rooms page, carrying the previous data PLUS the chosen hotel
    navigate('/rooms', { 
      state: { ...searchData, selectedHotel: hotelName } 
    });
  };

  return (
    <div className="fade-in" style={{ padding: '30px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Top Hotels in {city}</h1>
        <p>Choose a hotel to view available rooms.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {availableHotels.map((hotel) => (
          <div 
            key={hotel.id} 
            onClick={() => handleHotelSelect(hotel.name)}
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '12px', 
              overflow: 'hidden', 
              cursor: 'pointer',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <img src={hotel.image} alt={hotel.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2 style={{ margin: 0, color: '#007bff' }}>{hotel.name}</h2>
              <p style={{ margin: '5px 0 0 0', color: 'gray' }}>Click to view rooms</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;