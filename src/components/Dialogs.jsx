import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageCreator} from "./redux/dialogsReducer";

const Dialogs = ()=>{
  const dispatch = useDispatch()
  const dialogs  = useSelector(state=>state.dialogsPage.messages)
  const addMessage = (message) =>{
    const mess = {
      message,
      id: (Math.ceil(Math.random()*80)),
    }
    dispatch(sendMessageCreator(mess))
  }
  
  console.log(dialogs)
  
  return(
    <>
        <div>{
        dialogs.map(d => <div key={d.id}>{d.id} : {d.message} </div>)
        }</div>
        {/* <input placeholder="введи юзера"/> */}
          <button onClick={()=>addMessage(prompt(''))}>Send message</button>
    </>
  )
    
}

export default Dialogs