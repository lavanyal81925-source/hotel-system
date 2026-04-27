## Online Hotel Booking System
This repository contains a full-stack web application developed to simplify and automate the hotel booking process. The system allows users to search hotels, view details, and make bookings through an interactive and user-friendly interface.
# Frontend
The frontend of this project is developed using modern web technologies to provide a responsive and interactive user experience.
It includes:
Landing / Login Page
Hotel Listing Page
Room Details Page
Booking Interface
The UI is built using HTML, CSS, and JavaScript, ensuring a clean and responsive design.
Hotels are displayed using card-based layouts with images for better visualization.
the frontend communicates with the backend using API calls to fetch hotel data and booking details dynamically.
# Backend
The backend is developed using:
Node.js
Express.js
It acts as a bridge between the frontend and database, handling:
User authentication
Hotel data management
Booking processing
Request handling
The backend exposes REST APIs for smooth communication with the frontend.
# Database
The project uses a database to store and manage application data.
Collections:
Users → Stores user details (name, email, password, city)
Hotels → Stores hotel details (name, city, price, description, images)
Rooms → Stores room details (type, price, availability)
Bookings → Stores booking details (user, hotel, check-in, check-out)
# User Roles
 User
Search hotels by city
View hotel details
Select rooms
Book hotels
# Admin (Optional Enhancement)
Manage hotel listings
Monitor bookings
Update availability
# Workflow
Login → Enter Details → Search Hotels → View Hotel List → Select Hotel → View Rooms → Book Room → Booking Stored in Database
# Installation and Setup
Clone the project
git clone <your-repo-link>
Install dependencies
npm install
Run Frontend
npm start
Run Backend
cd backend
npm install
npm run dev
# Deployment
The application is deployed using AWS EC2, where:
EC2 instance hosts the application
Users access the system via public IP
Backend and frontend run on the server
# Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB / MySQL (based on your implementation)
Deployment: AWS EC2
# Features
User-friendly login system
Search hotels by city
View hotel listings with images
Room selection and booking
Responsive UI design
Real-time data handling
AWS deployment
# Challenges Faced
Integrating frontend with backend
Managing booking logic
Handling dynamic data updates
Deploying on AWS EC2
Designing responsive UI
# Future Scope
Online payment integration
User profile management
Booking history
Notification system
Reviews and ratings
Mobile application
Secure authentication (JWT)
# Advantages
Easy to use
Time-saving
Centralized system
Accessible from anywhere
Scalable with cloud deployment
# Limitations
Requires internet connection
Basic security (can be improved)
Limited advanced features
# Author
Vallamsetti Lavanya
