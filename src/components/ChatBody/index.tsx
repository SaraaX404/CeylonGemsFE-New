import { Input } from '@mui/material'
import Item from './Item.component'
import ChatBody from './chat.component'

type PropTypes = {
    name?:string
}

export default ({name}:PropTypes)=>{
    return (
        <div className='flex flex-row'>
        <div className='flex flex-col items-start w-[40%]'>
            <Input placeholder='search' className='mx-3 my-3 px-3' />
            {name&&<Item name={name}/>}
            <Item name='Kasun Kavinda'/>
            <Item name='Nimesh Kavinda'/>
            <Item name='Nimalsha Madushan'/>
        </div>
        <div className='w-[65%]  mx-[3%]'>
            <ChatBody name={name}/>
        </div>
        </div>
        
    )
}