import { sendMessageCreator} from "./redux/dialogsReducer";
import { connect } from "react-redux";
import DialogsMapDisp from  './DialogsMapDisp.jsx'



const mapStateToProps = (state)=>{ 
  //console.log(state) // object => dialogs page
    return{
      dialogsPage: state
    }
    
}

let mapDispatchToProps =(dispatch)=>{
    return {
     sendMessage: (newMessageBody)=>{
        dispatch(sendMessageCreator(newMessageBody));
     }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(DialogsMapDisp)
