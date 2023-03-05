import { ArrowDropDown,ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Refresh } from '@mui/icons-material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton } from '@mui/material'
import React from 'react'
import './EmailList.css'

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
      {/* <div className="emailList_sections">

      </div> */}

    </div>
  )
}

export default EmailList