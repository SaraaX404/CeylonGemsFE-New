import { Avatar } from "@mui/material"

type PropTypes = {
    name:string
}


export default ({name}:PropTypes)=>{
    return(
        <div className="w-[100%] rounded-lg bg-white flex flex-row items-center h-[50px] border border-gray-300 my-1 mx-3 cursor-pointer">
           <Avatar className="ml-3"/>
           <h1 className="text-gray text-[14px] font-medium ml-2">{name}</h1> 
        </div>
    )
}