import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  document.body.style.backgroundColor='#ffffff'
  return (
    <div className="app">
    <Header/>
    <Sidebar/>
    </div>
  );
}

export default App;
