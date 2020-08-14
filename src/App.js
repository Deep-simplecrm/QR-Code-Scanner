import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import QRCodeScanner from './QRCodeScanner';
//import QRCodeReader from './QRCodeReader';

class App extends Component {
  render() {
  return (
    <div className="App mt-5">
      <h2> QR Code Scanner </h2>
      <QRCodeScanner />
    </div>
  );
  }
}

export default App;
