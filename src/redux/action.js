export const folderDataaction=(data)=>{
    return{
        type:"FOLDER_DATA",
        data:data
    }
}

export const filterData=(data)=>{
    return{
        type:"FILTER_DATA",
        id:data
    }
}