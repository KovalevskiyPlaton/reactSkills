import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendSimpleMessageCreator, generateId} from "../src/components/redux/dialogsReducer";


  const Dialogs = ()=>{
  const dispatch = useDispatch()
  const messagesSender  = useSelector(state=>state.dialogsPage.messages)
  const dialogsSender  = useSelector(state=>state.dialogsPage.dialogs)
  console.log(dialogsSender)
  const addMessage = (message) =>{
  const mess = {
      message,
      id: generateId(),
          }
   dispatch(sendSimpleMessageCreator(mess))
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
     <h1>Section  - simple componenet Dialog (2 variants)</h1>
     <table style={{margin: '0 auto'}}>
      <td>
      <div>{
            dialogsSender.map(d => <div key={d.id}>{d.name}</div>)
            }</div>
      </td>
      <td >
         <div>{
            messagesSender.map(mS => <div key={mS.id}>{mS.message} </div>)
          }</div>
      </td>
     </table>
        {/*<div>{
        messagesSender.map(mS => <div key={mS.id}>{mS.message} </div>)
       }:</div>
          <div>{
        dialogsSender.map(d => <div key={d.id}>{d.name}</div>)
        }</div>*/}
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