import { CheckBoxOutlineBlank, DragIndicator, StarBorderOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EmailRow.css'

function EmailRow({title,subject,description,time,id}) {
  const navigate=useNavigate()
  const [style, setStyle] = useState(localStorage.getItem(`style_${id}`) || '');
   const handleclick=()=>{
    setStyle('blue');
    localStorage.setItem(`style_${id}`, 'rgb(243 243 255)');

    navigate('/mail');
  
    

  }


  return (
    <div onClick={handleclick} style={{backgroundColor:style}}  className='emailRow'>
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
        
        <div className="emailRow_subDesc">
          {}
        <h4>
          {subject}
        </h4>
          <p> - {description} 
          {/* {(description.length+subject.length>170)?'...':''} */}
          </p>       {/*text-overflow:ellipsis can be used in Css for the same effect. */}
        </div>
        {/* <div className="empty_space"></div> */}
        <div className="time">
        <p>{time}</p>


        </div>
    
    </div>
  )
}

export default EmailRow