import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import { Apps, HelpOutline, Search, Settings, Tune } from '@mui/icons-material';
import logo from './logo.png';

function Header() {
  document.body.style.backgroundColor="#f6f8fc"
  return (
    <div className="header">
        <div className="header_left">
            <IconButton>
            <MenuIcon/>
            </IconButton>
            <img src={logo} alt='Logo'/></div>
        <div className="header_middle">
            <Search/>
            <input placeholder='Search Mail' type="text"/>
        <IconButton>
            <Tune/>
        </IconButton>

        </div>
        <div className="header_right">
          
        <IconButton>
            < HelpOutline/>
            </IconButton>
        <IconButton>
          <Settings/>
        </IconButton>
        <IconButton>
          <Apps/>
        </IconButton>
        <IconButton>
          <Avatar/>

        </IconButton>




        </div>
        
        </div>
  )
}

export default Header