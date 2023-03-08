import { ArrowDropDown,ChevronLeft, ChevronRight, Inbox, KeyboardHide, MoreVert, People, Refresh, Sell } from '@mui/icons-material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material'
import React from 'react'
import './EmailList.css'
import EmailRow from './EmailRow';
import Section from './Section';

function EmailList() {
  // const gridStyle = {
  //   display: 'grid',
  //   gridGap: '16px',
  //   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  // };
  // if (window.innerWidth < 413) {
  //   gridStyle.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
  //   gridStyle.gridGap = '8px';
  // }
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
        <EmailRow title="Payoneer" id={ 1 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 2 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 3}  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={4 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={  5}  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 6 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 7 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 8 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 9 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 11 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 12 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 13 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 14 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 333 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 444 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 555 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={  7678}  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 666 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={6765 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 345433 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={  88}  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 99 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 122 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 23423}  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 98 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer" id={ 765 }  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>

      </div>
    

    </div>
  )
}

export default EmailList