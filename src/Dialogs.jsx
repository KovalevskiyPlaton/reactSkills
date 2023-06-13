import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendSimpleMessageCreator, generateId} from "../src/components/redux/dialogsReducer";


  const Dialogs = ()=>{
  const dispatch = useDispatch()
  const messagesSender  = useSelector(state=>state.dialogsPage.messages)
  const dialogsSender  = useSelector(state=>state.dialogsPage.dialogs)

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

  const dialogRender = dialogsSender.map(d => <td key={d.id} style={{border: '3px solid blue'}}>{d.name}:</td> )

  const messagesRender =  messagesSender.map(mS => <td key={mS.id} style={{border: '3px solid green'}}>{mS.message} </td>)
  return(

    <>
     <h1>Section  - simple componenet Dialog (2 variants)</h1>
     <table style={{margin: '0 auto'}} style={{border: '8px double red'}}>
         <tbody >
      <tr style={{border: '8px double green'}} >
               {dialogRender}
      </tr>
      <tr>
            {messagesRender}
      </tr>
         </tbody>
     </table>
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