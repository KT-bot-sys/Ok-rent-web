import React from 'react';
import './App.css';
import rentBanner from './assets/ok_rent_banner.jpg';

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
          href="https://apps.apple.com/tw/app/%E7%A7%9F-%E4%BA%8B/id6738840601" 
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
        src={rentBanner} 
        alt="找租事 Logo"
        style={{ width: "80%", maxWidth: "600px" }}
      />
      <p>出租大小事，諸事 OK！</p>
    </div>
  ); 
}

export default App;
