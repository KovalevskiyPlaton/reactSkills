import React from "react";
import { useSelector } from 'react-redux';

const Dialogs = ()=>{
  
  const dialogs  = useSelector(state=>state.dialogsPage.dialogs)
   
  
  console.log(dialogs)
  
  return(
    <>
        <div>{
        dialogs.map(d => <div>{d.id} : {d.name} </div>)
        }</div>
        
        <button>add user</button>
    </>
  )
    
}

export default Dialogs