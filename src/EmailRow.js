import { CheckBoxOutlineBlank, DragIndicator, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './EmailRow.css'

function EmailRow({title,subject,description,time,id}) {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate('/mail')}  className='emailRow'>
         <div className="myClass">
         <DragIndicator/></div> 

        <div className="emailRow_options">
            <IconButton>
                <CheckBoxOutlineBlank/>
            </IconButton>

            <IconButton>
            <StarBorderOutlined/>
            </IconButton>

        </div>
        <h4 className="emailRow_title">
            {title}
        </h4>
        <h4 className="emailRow_message">
          {subject}
        </h4>
        <div className="emailRow_description">
           - {description.slice(0,127)}{description.length>100?"...":''}       {/*text-overflow:ellipsis can be used in Css for the same effect. */}
        <p>{time}</p>
        </div>
    
    </div>
  )
}

export default EmailRow