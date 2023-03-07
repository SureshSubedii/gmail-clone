import { AccessTime, AddTask, ArrowBack,ChevronLeft, ChevronRight, DeleteOutlineOutlined, DriveFileMove, KeyboardHide, Label, MailOutline, MoreVert, MoveToInbox, ReportGmailerrorred } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import './Mail.css'

function Mail() {
  return (
    <div className="mail">
    <div className="mail_tools">
    <div className="mailtools_left">
      <IconButton>
        <ArrowBack/>
      </IconButton>
      <IconButton>
      <MoveToInbox/>
      </IconButton>

      <IconButton>
      <ReportGmailerrorred/>
      </IconButton>
      <IconButton>
        <DeleteOutlineOutlined/>
        
      </IconButton>
      |
      <IconButton>
      <MailOutline/>
      </IconButton>

      <IconButton>
        <AccessTime/>
      </IconButton>
      <IconButton>
      <AddTask/>
      </IconButton>
      |
      <IconButton>
      <DriveFileMove/>
      </IconButton>
      <IconButton>
        <Label/>
      </IconButton>
      <IconButton>
        <MoreVert/>
      </IconButton>

      </div>
    <div className="mailtools_right">
    <IconButton>
          <p style={{fontSize:'15px',fontWeight:'525'}}>1 of 1,023</p>
        </IconButton>
          
        <IconButton>
          <ChevronLeft/>
        </IconButton>


        <IconButton>
          <ChevronRight/>
        </IconButton>


        <IconButton>
          <KeyboardHide/>
        </IconButton>
      </div>
      </div> </div>
  )
}

export default Mail