import React from 'react';
import logo from './logo.svg';
import './App.css';
import QRCodeScanner from './QRCodeScanner';
function App() {
  return (
    <div className="App mt-5">
      <h2> QR Code Scanner </h2>
      <QRCodeScanner />
    </div>
  );
}

export default App;
