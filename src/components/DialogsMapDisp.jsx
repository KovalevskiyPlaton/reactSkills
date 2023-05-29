import React, { useState }  from "react";


const Dialogs = (props)=>{
  let state = props.dialogsPage
  let dialogs = props.dialogsPage.messages
  let users = props.dialogsPage.dialogs
  let renderDialogs = dialogs.map(d => <div key={d.id}>{d.message} </div>)
  let renderUsers = users.map(u => <div key={u.id}>{u.name} </div>)   
  
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
}

let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
}

//  let [inputValue, setInputvalue] = useState('') 
 
//  let addNewMassage = (inputValue)=>{
//   console.log(inputValue);
//   console.log(newMessageBody)
//   props.sendMessage(inputValue.newMessageBody);
// }

//  const handleChange = e =>{
//    setInputvalue(e.target.value) 
// }
  return(
    <>
      <span>{renderUsers}:{renderDialogs}</span>
       {/* <input placeholder="введи юзера"/> */}
       <button onClick={()=>console.log('addMessage(prompt())')}>Send message (variant 1)</button>
       
       <textarea type="text"
       value={newMessageBody}
       name="comment" 
       placeholder="Введите сообщение"  
      //  onChange={handleChange(values)}
      onChange={onNewMessageChange}
      />
      
      <input
      type="button"
      // onClick={()=>console.log('addMessage(prompt())')}
      className="submitBtn"
      value={'Send message (variant 2)'}
      onClick={onSendMessageClick}
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