import './App.css';
import { useState } from 'react';
import Childcomponent from './Childcomponent';

function App() {
  const [ childname,setChildname ] = useState("Default");
  const receiveName = (name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <Childcomponent setfun={receiveName}/>
      <p>Parent:My child said:{childname}</p>
    </div>
  );
}

export default App;
