import dialogsReducer from "./dialogsReducer";

import {legacy_createStore, combineReducers} from 'redux'


let reducers = combineReducers({dialogsPage:dialogsReducer});



export const store =  legacy_createStore(reducers);

export default store;

  
  
  

