
import './App.css';
import Box from './components/box.js';
import Save from './components/save.js'
import {useState} from 'react';

function App() {
  const[boxData,setBoxData]=useState("");
  const onDataChange=(data)=>{
    setBoxData(data);
  }

  return (
    <div className="App">
      <h1>TEXT EDITOR</h1>
      <Box onDataChange={onDataChange}/>
      <Save saveData={boxData}/>
    </div>
  );
}

export default App;
