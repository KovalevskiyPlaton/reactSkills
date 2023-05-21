import React  from "react";


const Dialogs = (props)=>{
  let dialogs = props.dialogsPage.dialogsPage.messages
  console.log(dialogs)
  
  

  
  return(
    <>
         <div>{
        dialogs.map(d => <div key={d.id}>{d.id} : {d.message} </div>)
        }</div> 
        {/* <input placeholder="введи юзера"/> */}
       <button onClick={()=>console.log('addMessage(prompt())')}>Send message (variant 1)</button>
       
       <textarea type="text"
       name="comment" 
       placeholder="Введите сообщение"  
       
      />
      
      <input
      type="button"
      onClick={()=>console.log('addMessage(prompt())')}
      className="submitBtn"
      value={'Send message (variant 2)'}
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