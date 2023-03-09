import { Button} from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { AccessAlarm, Description, Edit, Inbox, Label, Send, StarBorderSharp } from '@mui/icons-material';
import SidebarOptions from './SidebarOptions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
   


  return (
    <div className="sidebar"> 
    <Button  className="sidebar_compose" startIcon={<Edit/> }><p>Compose</p>
    </Button>
    <div className="sidebar_components">
    <SidebarOptions Icon={Inbox} title="Inbox" number={324} selected={true}/>
    <SidebarOptions Icon={StarBorderSharp} title="Starred"  />
    <SidebarOptions Icon={AccessAlarm} title="Snoozed" />
    <SidebarOptions Icon={Send} title="Sent" />
    <SidebarOptions Icon={Description} title="Drafts" number={45}/>
    <SidebarOptions Icon={ExpandMoreIcon} title="More" />

    </div>
    <div className="sidebar_footer">
    <p>Labels</p>
    <p1> +</p1>
    
    </div>
    <div className="sidebarFooter_item">
      <Label/>
      <p>Unwanted</p>
    </div>



    </div>
  )
}

export default Sidebar