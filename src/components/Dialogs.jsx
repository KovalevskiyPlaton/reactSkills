import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageCreator} from "./redux/dialogsReducer";


const Dialogs = ()=>{
  const dispatch = useDispatch()
  const dialogs  = useSelector(state=>state.dialogsPage.messages)
  const addMessage = (message) =>{
  const mess = {
      message,
      id: (Math.ceil(Math.random()*10*80)),
      
    }
    dispatch(sendMessageCreator(mess))
  }
  const [inputValue, setInputval] = useState('')
 
  
  return(
    <>
        <div>{
        dialogs.map(d => <div key={d.id}>{d.id} : {d.message} </div>)
        }</div>
        {/* <input placeholder="введи юзера"/> */}
          <button onClick={()=>addMessage(prompt(''))}>Send message (variant 1)</button>
       <textarea type="text" name="comment" placeholder="Введите комментарий"  value={inputValue} onChange={e=>setInputval(e.target.value)}
       />
       
      <input
      type="button"
      onClick={()=>addMessage(inputValue)}
      className="submitBtn"
      value={'Enter'}

      />
       
      
    </>
  )
    
}

export default Dialogs