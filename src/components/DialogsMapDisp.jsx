import React, { useState }  from "react";


const Dialogs = (props)=>{
  let state = props.dialogsPage.dialogsPage
  let dialogs = props.dialogsPage.dialogsPage.messages
  let users = props.dialogsPage.dialogsPage.dialogs
  let renderDialogs = dialogs.map(d => <div key={d.id}>{d.message} </div>)
  let renderUsers = users.map(u => <div key={u.id}>{u.name} </div>)   
  
  let newMessageBody = state.newMessageBody;
  

 let [inputValue, setInputvalue] = useState('') 
 
 let addNewMassage = (inputValue)=>{
  console.log(inputValue);
  console.log(newMessageBody)
  props.sendMessage(inputValue.newMessageBody);
}

 const handleChange = e =>{
   setInputvalue(e.target.value) 
}
  return(
    <>
      <span>{renderUsers}:{renderDialogs}</span>
       {/* <input placeholder="введи юзера"/> */}
       <button onClick={()=>console.log('addMessage(prompt())')}>Send message (variant 1)</button>
       
       <textarea type="text"
       value={inputValue}
       name="comment" 
       placeholder="Введите сообщение"  
      //  onChange={handleChange(values)}
      onChange={handleChange}
      />
      
      <input
      type="button"
      // onClick={()=>console.log('addMessage(prompt())')}
      className="submitBtn"
      value={'Send message (variant 2)'}
      onClick={()=>addNewMassage(inputValue)}
            />
      <input
      type="button"
      className="submitBtn"
      value={'Clear text'}
      
      />
       
      
    </>
  )
    
}

export default Dialogs