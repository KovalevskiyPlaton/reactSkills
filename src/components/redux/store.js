import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";
import {legacy_createStore, combineReducers} from 'redux'


let reducers = combineReducers({dialogsPage:dialogsReducer});



export const store =  legacy_createStore(reducers);

export default store;

  
  
   //export default store;

