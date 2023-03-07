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
    < >
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
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>
        <EmailRow title="Payoneer"  subject="Two step verification turned on" description="Dear Suresh Subedi, This mail is to confirm that the two step verification has been turned on. Ignore this if this is done by you. Else contact support." time="10 PM"/>

      </div>
    

    </div>
      <div className="emailList_right">
    </div> </>
  )
}

export default EmailList