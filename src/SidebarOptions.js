import React, { useState,useEffect} from 'react'
// import { useSelector } from 'react-redux'
import'./SidebarOptions.css'

function SidebarOptions({Icon,title,number,selected}) {
  
  return (
    <div className={`sidebar_options ${selected && "sidebar--active"}`}>
        {<Icon/>}
    <h4> {title}</h4>
    <p> {number}</p> 
    </div>
  )
}

export default SidebarOptions