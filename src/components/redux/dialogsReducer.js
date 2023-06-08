const  SEND_MESSAGE = 'SEND_MESSAGE';
const  UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const  SEND_SIMPLE_MESSAGE = 'SEND_SIMPLE_MESSAGE';

export function generateId (){
  return Math.ceil(Math.random()*12*255)
}


let initialState = {
      dialogs : [
        {id: 1, name: 'Dilan'},
        {id: 2, name: 'Boby'},
        {id: 3, name: 'Harry'},
        {id: 4, name: 'Salevan'}, 
        {id: 5, name: 'Vishman'},
        {id: 6, name: 'Klishman'},
        {id: 7, name: 'Freman'},
        {id: 8, name: 'Ishvan'},
        {id: 9, name: 'Stefan'}
      ],
      newMessageDial:'',
      messages : [
        {id: 1, message: 'Hi !!! I am Dilan'},
        {id: 2, message: 'Lemon tree'},
        {id: 3, message: 'good coding'},
        {id: 4, message: 'link for you https://'},
        {id: 5, message: 'I must pass on the secret'},
        {id: 6, message: 'Hellow from map !!'},
        {id: 7, message: 'And sweating blood, he prayed to his Father That this cup of death might pass'},
        {id: 8, message: 'I only need to pass these guards and I can do it," he said at last'},
        {id: 9, message: 'it`s - working'}
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