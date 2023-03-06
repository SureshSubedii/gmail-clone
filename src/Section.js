import React from 'react'
import './Section.css'

function Section({Icon,title,selected,color}) {
  return (
    <div className="section"
    style={{
        borderBottom:`3px solid ${selected && color}`,
        color:`${color}`
    }}
    ><Icon /> <h4>  {title}</h4>
    </div>
  )
}
//${selected && "section-selected"}`
export default Section