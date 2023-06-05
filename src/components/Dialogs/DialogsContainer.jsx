import { sendMessageCreator, updateNewMessageBodyCreator} from "../redux/dialogsReducer";
import { connect } from "react-redux";
import DialogsMapDisp from  './DialogsMapDisp.jsx'



const mapStateToProps = (state)=>{ 
  //console.log(state) // object => dialogs page
    return{
      dialogsPage: state.dialogsPage
    }
    
}

let mapDispatchToProps =(dispatch)=>{
    return {
     sendMessage: (newMessageBody)=>{
        dispatch(sendMessageCreator(newMessageBody));
     },
     updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
  }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(DialogsMapDisp)
