
import './App.css';
import CreatePopup from './Components/CreatePopup';
import Fileexplorer from './Components/Fileexplorer';
import { useState } from 'react';
import { createContext } from 'react';
import RenameComp from './Components/RenameComp';
export const Globaldata=createContext()
function App() {
  const[pop,setPop]=useState(false)
  const[renamePop,setRenamePop]=useState(false)
  const[name,setName]=useState("")
  return (
    <div className="App">
      <Globaldata.Provider value={{pop,setPop,renamePop,setRenamePop,name,setName}}>
      <Fileexplorer/>
      <CreatePopup/>
      <RenameComp/>
      </Globaldata.Provider>
    </div>
  );
}

export default App;
