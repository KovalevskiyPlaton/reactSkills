const  SEND_MESSAGE = 'SEND_MESSAGE';
const  UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const  SEND_SIMPLE_MESSAGE = 'SEND_SIMPLE_MESSAGE';

export function generateId (){
  return Math.ceil(Math.random()*12*255)
}


let initialState = {
      dialogs : [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}, 
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'MapNameId'},
        {id: 8, name: 'Less_one'},
        {id: 9, name: 'Less_nwei'}
      ],
      newMessageDial:'',
      messages : [
        {id: 1, message: 'Hi !!!'},
        {id: 2, message: 'How are you??'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hellow from map !!'},
        {id: 7, message: '23.03.2022'},
        {id: 8, message: '27.03.2022 - messages arr'}
      ],
      newMessageBody: '',
      
      
  
}

 const dialogReducer = (state=initialState, action)=>{
     switch(action.type){
      case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
     case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: generateId(), message: body}]
      };
         case SEND_SIMPLE_MESSAGE:
             let innerMess = action.newMessageBody;
             return {
                 ...state,
                 messages: [...state.messages, innerMess],
             };
     default:
    return state
   }
  }


export const sendMessageCreator = (newMessageBody)=>({type: SEND_MESSAGE, newMessageBody});
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})
export const sendSimpleMessageCreator = (newMessageBody) =>({type: SEND_SIMPLE_MESSAGE, newMessageBody})
export default dialogReducer;