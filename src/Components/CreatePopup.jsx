import React, { useState } from 'react'
import { Globaldata } from '../App'
import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { folderDataaction } from '../redux/action'

const CreatePopup = () => {
  const {pop,setPop,name,setName}=useContext(Globaldata)
  const[folder,setFolder]=useState(false)

  const dispatch=useDispatch()
  const folderData={
    folderName:name,
    folderType:folder,
    id:new Date().getTime().toString(),
  }

  const newValidation=()=>{
    if(name !== ''){
        dispatch(folderDataaction(folderData))
        setPop(false)
    }
    else{
        alert("Enter Name of the folder")
    }
  }
  return (
    <div className='pop_up' style={pop ? {display:"block"} : {display:"none"}}>
        <div className="pop_up_Container">
            <button className='cancel' onClick={()=>{
                setPop(false)
            }}>X</button>
            <h3 style={{color:"darkgreen"}}>Create new</h3>
            <div className="but_Cont">
                <button className='but' onClick={()=>{
                    setFolder(false)
                }}  style={folder ? null : {backgroundColor:"blue",color:"white"}}>File</button>
                <button className='but1' onClick={()=>{
                    setFolder(true)
                }}  style={folder ? {backgroundColor:"blue",color:"white"} : null}>Folder</button>
            </div>
            <input type='text' placeholder='Name' className='pop_up_input' onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button className='create_but' onClick={()=>{
              
               newValidation()
               
            }}>Create</button>
        </div>
    </div>
  )
}

export default CreatePopup