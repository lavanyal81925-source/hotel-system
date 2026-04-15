import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("https://img.freepik.com/premium-vector/beautiful-thank-you-card-with-composition-hand-drawn-flowers-golden-frame_147902-1544.jpg?w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}
      ></div>

      {/* Content */}
      <div
        className="fade-in"
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        <div
          style={{
            maxWidth: '500px',
            padding: '50px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            textAlign: 'center'
          }}
        >
          <h1
            style={{
              color: '#28a745',
              fontSize: '2.5rem',
              marginBottom: '10px'
            }}
          >
            🎉 Booking Confirmed!
          </h1>

          <h2 style={{ color: '#333', marginBottom: '20px' }}>
            Thank you for choosing us.
          </h2>

          <p
            style={{
              color: '#666',
              fontSize: '1.1rem',
              marginBottom: '40px',
              lineHeight: '1.6'
            }}
          >
            Your booking details have been successfully saved, and your receipt
            has been downloaded to your computer. We look forward to hosting you!
          </p>

          <button
            onClick={() => navigate('/')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#007bff',
              color: 'white',
              fontSize: '18px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = '#0056b3')
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = '#007bff')
            }
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;