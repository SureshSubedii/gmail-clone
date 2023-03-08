import { Close, OpenInFullOutlined, RemoveOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import './SendMail.css'
import {useForm} from 'react-hook-form'

function SendMail() {
    const{register,handleSubmit,watch,errors}=useForm();
    const onSubmit=(data)=>{
        console.log(data)

    }
  return (
    <div className="sendMail">
        <div className="sendMail_header">
            <h3>New message</h3>
            <div className="sendMail_close">
           <IconButton>
            <RemoveOutlined/>
           </IconButton>
           <IconButton>
           <OpenInFullOutlined/>

           </IconButton>

           
           <IconButton>
           <Close />

           </IconButton>
           </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="to" placeholder="To" type="text" ref={register({required:true})}/>
            <input name="subject" placeholder="Subject" type="text" ref={register({required:true})}/>
            <input  name="message" className="inputLast" type="text" ref={register({required:true})}/>

            <div className="sendMail_options">
                <button type="submit">Send</button>
            </div>


        </form>
    </div>
  )
}

export default SendMail