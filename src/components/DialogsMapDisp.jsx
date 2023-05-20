import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageCreator} from "./redux/dialogsReducer";
import { connect } from "react-redux";


const DialogsMapDisp = ()=>{
  // const dispatch = useDispatch()
  const dialogs  = useSelector(state=>state.dialogsPage.messages)
  // const addMessage = (message) =>{
  // const mess = {
  //     message,
  //     id: (Math.ceil(Math.random()*10*80)),
      
  //   }
  //  dispatch(sendMessageCreator(mess))
  // } 
  const [inputValue, setInputval] = useState('')
  
  const handleChange = e =>{
    setInputval(e.target.value)
  }
  const handleInput = e => {
    // очищаем инпут
    setInputval('');
  }  
const addMessage =()=>{
  return console.log('Сделай через  mapDispatchToProps')
}
  
  return(
    <>
        <div>{
        dialogs.map(d => <div key={d.id}>{d.id} : {d.message} </div>)
        }</div>
        {/* <input placeholder="введи юзера"/> */}
       <button onClick={()=>addMessage()}>Send message (variant 1)</button>
       
       <textarea type="text"
       name="comment" 
       placeholder="Введите сообщение"  
       value={inputValue} 
       onChange={handleChange}
       onClick={()=>handleInput()}
      />
      
      <input
      type="button"
      onClick={()=>addMessage()}
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
const mapStateToProps = (state)=>{ 
    return{
        dialogsPage: state.messages
    }
}

// let mapDispatchToProps =(dispatch)=>{
//   return {
//      sendMessage: (newMessageBody)=>{
//         dispatch(sendMessageCreator(newMessageBody));
//      }
//   }
// }


export default connect(mapStateToProps)(DialogsMapDisp) 