import { Input } from '@mui/material'
import Item from './Item.component'
import ChatBody from './chat.component'

export default ()=>{
    return (
        <div className='flex flex-row'>
        <div className='flex flex-col items-start w-[25%]'>
            <Input placeholder='search' className='mx-3 my-3' />
            <Item name='Kasun Kavinda'/>
            <Item name='Nimesh Kavinda'/>
            <Item name='Nimalsha Madushan'/>
            <Item name='Kasun Aravinda'/>
            <Item name='Kasun Kavinda'/>
            <Item name='Nimesh Kavinda'/>
            <Item name='Nimalsha Madushan'/>
            <Item name='Kasun Aravinda'/>
            <Item name='Kasun Kavinda'/>
           

        </div>
        <div className='w-[65%]  mx-[3%]'>
            <ChatBody/>
        </div>
        </div>
        
    )
}