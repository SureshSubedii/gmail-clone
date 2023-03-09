import { AddToDrive, AttachFile, Close, DeleteForever, FormatColorText, InsertEmoticon, InsertLink, LockClockOutlined, ModeOutlined, MoreVertOutlined, OpenInFullOutlined, RemoveOutlined } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import './SendMail.css'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';


function SendMail() {
    const{register,handleSubmit,watch,formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        console.log(data)


    }
    const dispatch = useDispatch();

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

           
           <IconButton onClick={()=>dispatch(closeSendMessage())}>
           <Close />

           </IconButton>
           </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input   placeholder="To" type="email" {...register("to",{required:"Recipient  is required!"})}/>
            {errors.to && <p> {errors.to.message}</p> }
            <input  placeholder="Subject" type="text" {...register("subject",{required:" Subject is required!"})}/>
            {errors.subject && <p> {errors.subject.message}</p> }

            <input   className="inputLast" type="text" {...register("message",{required:"Message is required!"})}/>
            {errors.message && <p> {errors.message.message}</p> }


            <div className="sendMail_options">
                <Button className="send" type="submit" >Send</Button>
                <IconButton>
                <FormatColorText/>
                </IconButton>
                <IconButton>
                    <AttachFile/>

                </IconButton>
                <IconButton>
                    <InsertLink/>
                </IconButton>
                <IconButton>
                    <InsertEmoticon/>
                </IconButton>
                <IconButton>
                    <AddToDrive/>
                </IconButton>
                <IconButton>
                    <ImageOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LockClockOutlined/>
                </IconButton>
                <IconButton>
                    <ModeOutlined/>
                </IconButton>
                <IconButton>
                    <MoreVertOutlined/>
                </IconButton>
                <IconButton style={{position:'absolute',right:'12px'}}>
                    <DeleteForever/>
                </IconButton>
            </div>


        </form>
    </div>
  )
}

export default SendMail