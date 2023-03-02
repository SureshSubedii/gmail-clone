import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { AccessAlarm, Description, Edit, Inbox, Send, StarBorderSharp } from '@mui/icons-material';
import SidebarOptions from './SidebarOptions';

function Sidebar() {
   


  return (
    <div className="sidebar"> 
    <Button  className="sidebar_compose" startIcon={<Edit/> }><p>Compose</p>
    </Button>
    <div className="sidebar_components">
    <SidebarOptions Icon={Inbox} title="Inbox" number={324} selected={true}/>
    <SidebarOptions Icon={StarBorderSharp} title="Starred" number={434} />
    <SidebarOptions Icon={AccessAlarm} title="Snoozed" number={432}/>
    <SidebarOptions Icon={Send} title="Sent" number={453}/>
    <SidebarOptions Icon={Description} title="Drafts" number={453}/>
    </div>



    </div>
  )
}

export default Sidebar