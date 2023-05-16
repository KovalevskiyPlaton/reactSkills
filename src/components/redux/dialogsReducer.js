const  SEND_MESSAGE = 'SEND_MESSAGE';
//const  RENDER_MESSAGE = 'RENDER_MESSAGE';

let initialState = {
      dialogs : [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'}, 
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
        {id: 7, name: 'MapNameId'},
        {id: 8, name: 'Less_23.03.2022'},
        {id: 9, name: 'Less29'}
      ],
      newMessageDial:'',
      messages : [
        {id: 1, message: 'Hi !!!'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Hellow from map !!'},
        {id: 7, message: '23.03.2022'},
        {id: 8, message: '27.03.2022 - messages arr'}
      ],
      newMessageBody: ''
      
  
}

 const dialogReducer = (state=initialState, action)=>{
     switch(action.type){
     case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, body]
      };
     default:
    return state
   }
  }
//   const renderDialogsReducer = (state=initialState, action)=>{
//     switch(action.type){
//     case RENDER_MESSAGE:
//      let bodyDial = action.newMessageDial;
//      return {
//        ...state,
//        dialogs: [...state.dialogs, {id: 12, name: bodyDial}]
//      };
//     default:
//    return state
//   }
  
//  }

 export const sendMessageCreator = (newMessageBody)=>({type: SEND_MESSAGE, newMessageBody});
// export const renderDialogsCreator = (newMessageDial)=>({type: RENDER_MESSAGE, newMessageDial}) 

export default dialogReducer;