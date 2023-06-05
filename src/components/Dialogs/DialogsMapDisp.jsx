import React  from "react";


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
    <h1>Section  - Send Messages from Container Component</h1>
      <span>{renderUsers}:{renderDialogs}</span>
          
       <textarea type="text"
       value={newMessageBody}
       name="comment" 
       placeholder="Введите сообщение"  
   
      onChange={onNewMessageChange}
      />
      
      <input
      type="button"
    
      className="submitBtn"
      value={'Send message'}
      onClick={onSendMessageClick}
            />
      
           
    </>
  )
    
}

export default Dialogs