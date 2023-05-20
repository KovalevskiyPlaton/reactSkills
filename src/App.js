import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs';
import DialogsMapDisp from './components/DialogsMapDisp';


function App() {
  return (
    <div className="App">
        <h1>Hello world</h1>
        {/* <Dialogs/> */}
        <DialogsMapDisp/>
    </div>
  );
}

export default App;
