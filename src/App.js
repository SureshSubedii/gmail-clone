import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import EmailList from './EmailList';
import Header from './Header';
import Mail from './Mail';
import Sidebar from './Sidebar';
import calendar from './calendar.png'
import { IconButton } from '@mui/material';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import check from './check.png'
import { Add, ChevronRight, Person } from '@mui/icons-material';
import SendMail from './SendMail';

function App() {
  document.body.style.backgroundColor='#f6f8fc'
  const [click, setClick] = useState(false)
  const handleClick=()=>{
    console.log("Happy Birthday")
    if(click===false){
    document.querySelector('.iconStart').classList.add("clicked")
    setClick(true);
  }
   else{
    document.querySelector('.iconStart').classList.remove("clicked")
    setClick(false);


  }

  }
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
    <div className="icons_right">
    <div className="iconStart">
     <IconButton><img src={calendar}/>
     </IconButton> 
     <IconButton style={{color:'#ffc400'}}>
      <LightbulbCircleIcon/>
     </IconButton>
     <IconButton>
      <img className="check" src={check}/>

     </IconButton >
     <IconButton style={{color:'#0482ff'}}>
      <Person />
     </IconButton> 
     ___

     <IconButton style={{color:'black'}}>
      <Add/>
     </IconButton >
     </div>
     <div className="iconEnd">
     <IconButton onClick={handleClick}  >
      <ChevronRight  />
     </IconButton>
     </div>
    </div>

     
    



    </div>
    <SendMail/>
    </div>
    </Router>
  );
}

export default App;
