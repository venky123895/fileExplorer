import React from 'react'
import './fileexplorer.css'
import { useContext } from 'react'
import { Globaldata } from '../App'
import folder from './ImagesContainer/folder.png'
import file from './ImagesContainer/file.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { filterData } from '../redux/action'
const Fileexplorer = () => {
   const {setPop,setRenamePop} =useContext(Globaldata)
   const selector=useSelector((state)=>{
    return state.folderReducer
   })
   const dispatch=useDispatch()
   console.log("selector",selector)
  return (
    <div className='mainContainer' >
     
        {
            (selector.length===0) ? (<>   <div className="but_cotainer">
            <button className='add_button' onClick={()=>{
                setPop(true)
            }}>
            <i class="fa-solid fa-plus"></i>
            </button>
            </div></>) : (selector.map((ele)=>{
                return(
                    <div className='hoverEffect'>
                    <div className="fileContainer">
            <div className="imageContainer">
                <img src={ele.folderType ? folder : file} alt='logo' className='fileLogo'/>
            </div>
            <p className='fileTitle'>{ele.folderName}</p>
        </div>
        <div className="onHoverContainer">
            <button onClick={()=>{
                setRenamePop(true)
            }}>Rename</button>
            <button onClick={()=>{
                dispatch(filterData(ele.id))
                
            }}>Delete</button>
        </div>
        </div>
                )
            }))
        }
        {
            (selector.length) >0 ? (
                <>   <div className="but_cotainer">
                <button className='add_button' onClick={()=>{
                    setPop(true)
                }}>
                <i class="fa-solid fa-plus"></i>
                </button>
                </div></>
            ): null
        }
    </div>
  )
}

export default Fileexplorer