import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const room = state?.room || { name: "Luxury Suite", price: 5000 };

  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSaveBooking = async (e) => {
    e.preventDefault();
    const guestData = { guestName, phone, roomName: room.name, checkIn, checkOut };

    try {
      const response = await fetch('http://localhost:5000/api/save-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(guestData)
      });

      if (response.ok) {
        // SUCCESS: Download JSON and then Redirect
        const blob = new Blob([JSON.stringify(guestData, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Receipt_${guestName}.json`;
        link.click();

        // 🟢 REDIRECT URL
        navigate('/thank-you'); 
      }
    } catch (error) {
      alert("Backend is not running on Port 5000!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Confirm Your Booking</h2>
        <p style={styles.subtitle}>Selected: <strong>{room.name}</strong></p>
        
        <form onSubmit={handleSaveBooking} style={styles.form}>
          <input type="text" placeholder="Full Name" value={guestName} onChange={(e) => setGuestName(e.target.value)} required style={styles.input} />
          <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required style={styles.input} />
          
          <div style={styles.dateGroup}>
            <div>
              <label style={styles.label}>Check-In</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Check-Out</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required style={styles.input} />
            </div>
          </div>

          <button type="submit" style={styles.button}>Confirm & Save Booking</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f4f7f6' },
  card: { backgroundColor: 'white', padding: '40px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '450px' },
  title: { color: '#2c3e50', marginBottom: '10px', textAlign: 'center' },
  subtitle: { textAlign: 'center', color: '#7f8c8d', marginBottom: '30px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' },
  dateGroup: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  label: { fontSize: '12px', color: '#7f8c8d', fontWeight: 'bold', marginBottom: '5px', display: 'block' },
  button: { padding: '15px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', transition: '0.3s' }
};

export default BookingForm;