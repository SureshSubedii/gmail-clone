import { ArrowDropDown, CheckBox, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Refresh } from '@mui/icons-material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material'
import React from 'react'
import './EmailList.css'

function EmailList() {
  return (
    <div className='emailList'>
      <div className="email_settings">
        <div className="emailList_settingsLeft">
        <CheckBoxOutlineBlankIcon/>

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

      </div>

    </div>
  )
}

export default EmailList