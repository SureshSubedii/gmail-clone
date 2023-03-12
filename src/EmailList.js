import { ArrowDropDown,ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, People, Refresh, Sell } from '@mui/icons-material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material'
import React, { useState,useEffect } from 'react'
import './EmailList.css'
import EmailRow from './EmailRow';
import { db } from './firebase';
import Section from './Section';

function EmailList() {
  const [emails, setEmail] = useState([]);
  useEffect(() => {
    db.collection("email")
    .orderBy("timestamp","desc")
    .onSnapshot(
      (snapshot)=>{
        setEmail(
          snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data()
        })))

      }
    )
  }
   , [])
  

  return (
    <div className='emailList'>

      <div className="email_settings">
        <div className="emailList_settingsLeft">
        <IconButton>
        <CheckBoxOutlineBlankIcon/>
        </IconButton>
        <IconButton>
          <ArrowDropDown/>
          </IconButton>

          
        <IconButton>
          <Refresh/>
        </IconButton>
        <IconButton>
          <MoreVert/>

        </IconButton>

        </div>
        <div className="emailList_settingsRight">
        <IconButton>
          <p style={{fontSize:'15px',fontWeight:'525'}}>1-50 of 1,023</p>
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
      <div className="emailList_sections">
        <Section Icon={Inbox} title="Primary" color="#0b57d0" selected={true}/>
        <Section Icon={Sell} title="Promotions" color="gray"  />

        <Section Icon={People} title="Social" color="gray" />


      </div>
      <div className="emailList_Lists">
        {emails.map(({id,data:{to,subject,message,timestamp,name,photo,email}})=>(
          <EmailRow 
          id ={id} 
          key={id} 
          title={to} 
          subject={subject} 
           description={message} 
           name={name}
           photo={photo}
           email={email}
          time={new Date(timestamp?.seconds * 1000).toUTCString()}/>
        ))
        }
       
      </div>
    

    </div>
  )
}

export default EmailList