import React from 'react'
import { useContext } from 'react'
import { Globaldata } from '../App'

const RenameComp = () => {
    
    const{renamePop,setRenamePop,name,setName}=useContext(Globaldata)
    console.log("rename",renamePop);
  return (
    <div className='renameContainer' style={renamePop ? {display:"block"}:{display:"none"}}>
        <div className="renameCard">
            <button className='renameCancel' onClick={()=>{
                setRenamePop(false)
            }}>X</button>
            <h3 className='title'>Rename</h3>
            <input type='text' className='renameInput' placeholder='Enter Name'  onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button className='renameBut' onClick={()=>{
                setName(name)
            }}>Rename</button>
        </div>
    </div>
  )
}

export default RenameComp