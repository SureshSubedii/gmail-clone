import { AccessTime, AddTask, ArrowBack,ChevronLeft, ChevronRight, DeleteOutlineOutlined, DriveFileMove, ExpandMore, KeyboardHide, Label, MailOutline, MoreVert, MoveToInbox, OpenInNew, Print, ReportGmailerrorred, StarBorder, TurnLeft } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectOpenMail } from './features/mailSlice'
import { selectUser } from './features/userSlice'
import './Mail.css'

function Mail({}) {
  const navigate=useNavigate();
  const mail=useSelector(selectOpenMail);
  const user=useSelector(selectUser);
  return (
    <div className="mail">
    <div className="mail_tools">
    <div className="mailtools_left">
      <IconButton onClick={()=>navigate('/')}>
        <ArrowBack   />
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
      
      </div> 
      <div className="mail_headings">
        <div className="mailheadings_left">
          <p>{mail?.subject}</p>  {/* Subject*/}

        </div>
        <div className="mailheadings_right">
          <IconButton>
            <Print/>
          </IconButton>
          <IconButton>
            <OpenInNew/>
          </IconButton>

        </div>
      </div>
      <div className="mail_body">
        <div className="mailbody_left">
        <Avatar src={user.photoUrl}/>  <h5> {user.displayName} </h5>     {/* Title*/}
        <p>{user?.email} {">"} </p>
        <span> to {mail?.title}
          <IconButton>
          <ExpandMore/>

          </IconButton>
          </span>


        </div>
        <div className="mailbody_right">
          <IconButton>
            <StarBorder/>
          </IconButton>
          <IconButton>
            <TurnLeft/>

          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
</div>
      </div>
      <div className="mail_center">
        {mail?.description}
      </div>
      </div>
  )
}

export default Mail