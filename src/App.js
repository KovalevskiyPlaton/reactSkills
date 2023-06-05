import React from 'react';
import './App.css';
//import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Dialogs from './Dialogs';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      
        <h1>Hello world:- from App.js</h1>
        <NavBar/>
        <Routes>
        
        <Route path="/dialogsSim/" element={<Dialogs/>}/>
        <Route path="/dialogsContair/" element={<DialogsContainer/>}/>
        </Routes>
       
    </div>
  );
}

export default App;
