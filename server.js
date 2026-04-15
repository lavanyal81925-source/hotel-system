require('dotenv').config();
require('dns').setServers(['8.8.8.8', '8.8.4.4']);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// 1. Connection String to your MongoDB (Atlas or Local)
// Now loaded securely using dotenv
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/HOTEL_BOOKING";

mongoose.connect(mongoURI)
  .then(() => {
    console.log("✅ Connected to Database:", mongoose.connection.name); // This will print the name
    console.log("✅ Using Collection:", Booking.collection.name); // This will print the collection
  })

// 2. Define the Schema (Structure) for your guest details
const BookingSchema = new mongoose.Schema({
  guestName: String,
  phone: String,
  roomName: String,
  checkIn: String,
  checkOut: String,
  bookedAt: { type: Date, default: Date.now }
});

// 3. Create the Model 
// 'Booking' is the model, 'DETAILS OF BOOKINGS' is your collection name
const Booking = mongoose.model('Booking', BookingSchema, 'DETAILS OF BOOKINGS');

// backend/server.js

app.get('/api/get-bookings', async (req, res) => {
  try {
    // This fetches every single record from your 'DETAILS OF BOOKINGS' collection
    const allBookings = await Booking.find().sort({ bookedAt: -1 }); 
    res.status(200).json(allBookings);
  } catch (error) {
    console.error("❌ Error fetching from Mongo:", error);
    res.status(500).send({ error: "Could not fetch bookings" });
  }
});

app.post('/api/save-booking', async (req, res) => {
  // 🟢 LOG 1: Check if React even reached the server
  console.log("📥 [Server] Received a request from React!");
  console.log("📦 [Server] Data received:", req.body);

  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    
    // 🟢 LOG 2: Confirm it actually went into MongoDB
    console.log("✅ [Server] Successfully saved to MongoDB:", savedBooking);
    
    res.status(200).send({ message: "Success! Data saved to MongoDB." });
  } catch (error) {
    // 🔴 LOG 3: Show us exactly why it failed
    console.error("❌ [Server] MongoDB Save Error:", error);
    res.status(500).send({ error: "Failed to save booking to database." });
  }
});

// 5. Start the server on Port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});