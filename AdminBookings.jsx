import React, { useEffect, useState } from 'react';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/get-bookings')
      .then(res => {
        if (!res.ok) throw new Error('Server not responding');
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{textAlign: 'center', marginTop: '50px'}}>Loading Bookings...</h2>;

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#007bff', borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
        Admin Panel: Guest Records
      </h1>
      
      {bookings.length === 0 ? (
        <div style={{marginTop: '30px', padding: '20px', backgroundColor: '#fff3cd', borderRadius: '8px'}}>
          <strong>No Bookings Found:</strong> The database is connected, but no guests have booked yet!
        </div>
      ) : (
        <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <thead style={{ backgroundColor: '#007bff', color: 'white' }}>
            <tr>
              <th style={{ padding: '12px', textAlign: 'left' }}>Guest Name</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Phone</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Room</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Check-In</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Check-Out</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{b.guestName}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{b.phone}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{b.roomName}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{b.checkIn}</td>
                <td style={{ padding: '12px', borderBottom: '1px solid #ddd' }}>{b.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewBookings;