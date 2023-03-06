import { CheckBoxOutlineBlank, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import './EmailRow.css'

function EmailRow({title,subject,description,time,id}) {
  return (
    <div className='emailRow'>
        <div className="emailRow_options">
            <IconButton>
                <CheckBoxOutlineBlank/>
            </IconButton>

            <IconButton>
            <StarBorderOutlined/>
            </IconButton>

        </div>
        <div className="emailRow_title">
            {title}
        </div>
        <div className="emailRow_message"></div>
        <div className="emailRow_description"></div>
    
    </div>
  )
}

export default EmailRow