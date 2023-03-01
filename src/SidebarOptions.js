import React, { useState,useEffect} from 'react'
// import { useSelector } from 'react-redux'
import'./SidebarOptions.css'

function SidebarOptions({Icon,title,number}) {
  
  return (
    <div className="sidebar_options">
        {<Icon/>}
     
    <h4> {title}</h4>
    <p>  {number}</p> 
    </div>
  )
}

export default SidebarOptions