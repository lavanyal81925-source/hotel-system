import React from 'react';
import { rooms } from '../data/roomsData';
import RoomCard from '../components/RoomCard';

const RoomsPage = () => {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Available Rooms</h1>
        <p>Select the perfect room for your selected dates.</p>
      </header>

      {/* Grid layout for the cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
        {rooms.map((item) => (
          <RoomCard key={item.id} room={item} />
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;