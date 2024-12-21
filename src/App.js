import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>歡迎使用「租.事」</h1>
      <p>
        <a 
          href="https://play.google.com/store/apps/details?id=com.example.android" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#007BFF',
            fontWeight: 'bold'
          }}
        >
          Android App 應用下載連結 
        </a>
      </p>

      <p>
        <a 
          href="https://apps.apple.com/us/app/example-ios/id1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#007BFF',
            fontWeight: 'bold'
          }}
        >
          iOS App 應用下載連結
        </a>
      </p>
      <img 
        src="/images/ok_rent_banner.jpg" 
        alt="找租事 Logo"
        style={{ width: "80%", maxWidth: "600px" }}
      />
      <p>出租大小事，諸事 OK！</p>
    </div>
  ); 
}

export default App;
