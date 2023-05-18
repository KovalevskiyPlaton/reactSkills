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
  const handleChange = e =>{
    setInputval(e.target.value)
  }
  const handleInput = e => {
    // access event.which for the keycode and eventually clear the inputfield value
    setInputval('');
  }  

  
  return(
    <>
        <div>{
        dialogs.map(d => <div key={d.id}>{d.id} : {d.message} </div>)
        }</div>
        {/* <input placeholder="введи юзера"/> */}
       <button onClick={()=>addMessage(prompt(''))}>Send message (variant 1)</button>
       
       <textarea type="text"
       name="comment" 
       placeholder="Введите сообщение"  
       value={inputValue} 
       onChange={handleChange}
       onClick={()=>handleInput()}
      />
      
      <input
      type="button"
      onClick={()=>addMessage(inputValue)}
      className="submitBtn"
      value={'Send message (variant 2)'}
      />
      <input
      type="button"
      className="submitBtn"
      value={'Clear text'}
      onClick={()=>handleInput()}
      />
       
      
    </>
  )
    
}

export default Dialogs