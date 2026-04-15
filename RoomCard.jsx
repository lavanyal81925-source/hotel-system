import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const RoomCard = ({ room }) => {
  const navigate = useNavigate(); // 2. Initialize it

  // 3. Create a function to handle the button click
  const handleBookClick = () => {
    navigate('/book', { state: { room: room } }); 
  };

  return (
    <div style={styles.card}>
      <img src={room.image} alt={room.name} style={styles.image} />
      
      <div style={styles.info}>
        <h3 style={styles.title}>{room.name}</h3>
        <p style={styles.type}>{room.type} Room</p>
        
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2c3e50', margin: '10px 0' }}>
          ₹{room.price} <span style={{ fontSize: '0.9rem', color: 'gray', fontWeight: 'normal' }}>/ night</span>
        </p>
        
        {/* 4. Update the button to use the new function */}
        <button 
          style={room.available ? styles.bookBtn : styles.soldOutBtn}
          disabled={!room.available}
          onClick={handleBookClick} 
        >
          {room.available ? "Book Now" : "Sold Out"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: { border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease-in-out' },
  image: { width: '100%', height: '200px', objectFit: 'cover' },
  info: { padding: '20px', display: 'flex', flexDirection: 'column', gap: '5px' },
  title: { margin: '0', fontSize: '1.4rem', color: '#333' },
  type: { margin: '0', color: '#777', fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '1px' },
  bookBtn: { backgroundColor: '#007bff', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem', marginTop: '15px' },
  soldOutBtn: { backgroundColor: '#e0e0e0', color: '#999', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'not-allowed', fontWeight: 'bold', fontSize: '1rem', marginTop: '15px' }
};

export default RoomCard;