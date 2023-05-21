import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs';
import DialogsContainer from './components/DialogsContainer';


function App() {
  return (
    <div className="App">
        <h1>Hello world</h1>
        {/* <Dialogs/> */}
        <DialogsContainer/>
          
       
    </div>
  );
}

export default App;
