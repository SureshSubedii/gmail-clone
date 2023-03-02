import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import { Apps, HelpOutline, NotificationImportant, Search, Settings, Support, Tune } from '@mui/icons-material';

function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <IconButton>
            <MenuIcon/>
            </IconButton>
            <img src="https://blog.logomyway.com/wp-content/uploads/2021/02/gmail-logo.jpg"/></div>
        <div className="header_middle">
            <Search/>
            <input placeholder='Search Mail' type="text"/>
            <Tune/>
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