import { Close, OpenInFullOutlined, RemoveOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import './SendMail.css'

function SendMail() {
    const{register,handleSubmit,watch,formState:{errors}}=useForm();
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
            <input   placeholder="To" type="text" {...register("to",{required:"Required!"})}/>
            {errors.to && <p> {errors.to.message}</p> }
            <input  placeholder="Subject" type="text" {...register("subject",{required:"Required!"})}/>
            {errors.subject && <p> {errors.subject.message}</p> }

            <input   className="inputLast" type="text" {...register("message",{required:"Required!"})}/>
            {errors.message && <p> {errors.message.message}</p> }


            <div className="sendMail_options">
                <button type="submit">Send</button>
            </div>


        </form>
    </div>
  )
}

export default SendMail