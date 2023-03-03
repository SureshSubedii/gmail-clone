import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import EmailList from './EmailList';
import Header from './Header';
import Mail from './Mail';
import Sidebar from './Sidebar';

function App() {
  document.body.style.backgroundColor='#ffffff'
  return (
    <Router>
    <div className="app">
    <Header/>
    <div className="app_body">
    <Sidebar/>
    <Routes>
    <Route exact path="/" element={<EmailList/>}/>
    <Route exact  path="/mail" element={<Mail/>}/>

    </Routes>


    </div>
    </div>
    </Router>
  );
}

export default App;
