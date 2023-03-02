import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { Edit, Inbox } from '@mui/icons-material';
import SidebarOptions from './SidebarOptions';

function Sidebar() {
   


  return (
    <div className="sidebar"> 
    <Button  className="sidebar_compose" startIcon={<Edit/> }><p>Compose</p>
    </Button>
    <SidebarOptions Icon={Inbox} title="Inbox" number={55}/>
    </div>
  )
}

export default Sidebar