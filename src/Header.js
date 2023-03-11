import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import { Apps, HelpOutline, Search, Settings, Tune } from '@mui/icons-material';
import logo from './logo.png';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Header() {
  document.body.style.backgroundColor="#f6f8fc"
  const user=useSelector(selectUser);

  return (
    <div className="header">
        <div className="header_left">
            <IconButton>
            <MenuIcon/>
            </IconButton>
            <img src={logo} alt='Logo'/></div>
            <div className="blank">
              
            </div>
        <div className="header_middle">
            <Search/>
            <input placeholder='Search Mail' type="text"/>
        <IconButton>
            <Tune/>
        </IconButton>
        

        </div>
        <div className="empty">
        <IconButton>
            < HelpOutline/>
            </IconButton>
        <IconButton>
          <Settings/>
        </IconButton>
              
            </div>
        <div className="header_right">
          
        
        <IconButton>
          <Apps/>
        </IconButton>
        <IconButton>
          <Avatar src={user.photoUrl}/>

        </IconButton>




        </div>
        
        </div>
  )
}

export default Header