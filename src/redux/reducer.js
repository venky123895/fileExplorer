const intialData=[]
export const folderReducer=(state=intialData,action)=>{
    switch (action.type) {
        case "FOLDER_DATA":
            
            return[...state,action.data];
        case "FILTER_DATA":
            
            return(
                state.filter(({id})=>{
                    return id !== action.id
                 
                })
               
            )
            
        
        default:
            return state;
    }
}
