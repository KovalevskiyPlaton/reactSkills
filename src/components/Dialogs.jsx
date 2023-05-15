import React from "react";
import { useSelector, useDispatch } from 'react-redux';
//const dialogs  = useSelector(state=>state.profilePage)

const Dialogs = ()=>{
  
  const dispatch = useDispatch();
  const dialogs = useSelector(state=>state.dialogs)
  console.log(dialogs)
  debugger
  return(
    <>
        <div>{dialogs}</div>
        <h5> здесь будут отображатся диалоги</h5>
        <button></button>
    </>
  )
    
}

export default Dialogs