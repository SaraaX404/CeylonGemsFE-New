import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineComment } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import {BsFacebook, BsTwitter, BsInstagram, BsSearch, BsFillSendCheckFill} from 'react-icons/bs'
import { CiFaceSmile } from "react-icons/ci"
import { SlPeople } from "react-icons/sl"
type PropTypes = {
    children: React.ReactNode
    isProfile?: boolean 
}


export default (props:PropTypes)=>{

    const [showContactBar, setShowContactBar] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
          // Show the "Contact Us" bar only when the user is at the top
          setShowContactBar(scrollTop === 0);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


    return(
        <div className="flex flex-col bg-gray-100">
            {showContactBar&&(
 <div className="flex flex-row justify-between items-center bg-slate-100 h-[120%]">
 <div className="flex flex-row items-center justify-evenly w-[15%]">
     <h1 className="text-[16px] font-semibold text-gray-700">Follow Us</h1>
     <BsFacebook />
     <BsTwitter />
     <BsInstagram />
 </div>
 <h1 className="text-[17px] font-semibold text-gray-500 my-3">Email: contact@example.com</h1>
 <div className="flex flex-row items-center justify-evenly w-[15%]">

     <h1 className="text-[16px] font-normal text-gray-500"> Language</h1>
     <h1 className="text-[16px] font-normal text-gray-500"> Currency</h1>
 </div>
</div>
            )}
       
        <div className={`grid grid-cols-6 items-center`}>
            
            <img src={"https://th.bing.com/th/id/R.f587908a16791fb5c8ff67f23b4abf47?rik=tQW%2bwcEZ6mmLhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-a8d5wx8ZDUc%2fT_1jkkGRfZI%2fAAAAAAAAAJ4%2f9EP6naleiFY%2fs1600%2fsample-logo2.png&ehk=EHvhwEZyZh%2f5rIZH6I0Zmr2pUXVWkh5fra0PqF%2fXLEA%3d&risl=&pid=ImgRaw&r=0"} width={'50%'} className="ml-2"/>
            <div className="col-span-4">
                <div className="mx-8 flex flex-row items-center justify-evenly">
                    <Link href={'/'}><h1 className="font-semibold text-gray-600 cursor-pointer">Home</h1></Link>
                    <Link href={'/about-us'}> <h1 className="font-semibold text-gray-600 cursor-pointer">About Us</h1></Link>
                    <Link href={'/how-it-works'}><h1 className="font-semibold text-gray-600 cursor-pointer">How It Works</h1></Link>
                    <Link href={'/products'}><h1 className="font-semibold text-gray-600 cursor-pointer">Browse Product</h1></Link>
                    <h1 className="font-semibold text-gray-600 cursor-pointer">Create Product</h1>
                    <h1 className="font-semibold text-gray-600 cursor-pointer">Contact</h1>
                </div>
            </div>
            <div className="flex flex-row items-center justify-evenly">
                <button><BsSearch/></button>
                <Link href="/profile"><button className="border rounded text-[16px] text-gray-600 p-3">My Account</button></Link>
            </div>
        </div>
        {props.children}
      {!props.isProfile&&(
        <div className="flex flex-row items-center justify-between mx-[15%] mt-[4%]">
          <div className="flex flex-col items-center border shadow rounded hover:scale-105 transition-transform duration-300">
            <div className='flex flex-row items-center justify-between p-5'>
              <SlPeople className="text-gray-800 text-[18px] font-bold"/>
              <div className='mx-8'></div>
              <h1 className='text-gray-800 text-[24px] font-bold'>210+</h1>
            </div>
            <div className="flex flex-col items-center">
              
              <h1 className='mb-5 text-gray-700 text-[18px] font-semibold'>Happy Customer</h1>
            </div>
          </div>
          <div className="flex flex-col items-center border shadow rounded hover:scale-105 transition-transform duration-300">
            <div className='flex flex-row items-center justify-between p-5'>
              <AiOutlineComment className="text-gray-800 text-[18px] font-bold" />
              <div className='mx-8'></div>
              <h1 className='text-gray-800 text-[24px] font-bold'>220+</h1>
            </div>
            <div className="flex flex-col items-center ">
              
              <h1 className='mb-5 text-gray-700 text-[18px] font-semibold'>Good Reviews</h1>
            </div>
          </div>
          <div className="flex flex-col items-center border shadow rounded hover:scale-105 transition-transform duration-300">
            <div className='flex flex-row items-between justify-center p-5'>
              <CiFaceSmile className="text-gray-800 text-[18px] font-bold"/>
              <div className='mx-8'></div>
              <h1 className='text-gray-800 text-[24px] font-bold'>400+</h1>
            </div>
            <div className="flex flex-col items-center">
              
              <h1 className='mb-5 text-gray-700 text-[18px] font-semibold'>Winner Customer</h1>
            </div>
          </div>
          <div className="flex flex-col items-center border shadow rounded hover:scale-105 transition-transform duration-300">
            <div className='flex flex-row items-center justify-between p-5'>
              <BiCommentDetail/>
              <div className='mx-8'></div>
              <h1 className='text-gray-800 text-[24px] font-bold'>550+</h1>
            </div>
            <div className="flex flex-col items-center">
              
              <h1 className='mb-5 text-gray-700 text-[18px] font-semibold'>New Comments</h1>
            </div>
          </div>
        </div>
      )}
          
        <div className='bg-gray-800 h-[400px] mt-[8%]'>
            <div className='flex flex-col items-center'>
            <img src={"https://th.bing.com/th/id/R.f587908a16791fb5c8ff67f23b4abf47?rik=tQW%2bwcEZ6mmLhg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-a8d5wx8ZDUc%2fT_1jkkGRfZI%2fAAAAAAAAAJ4%2f9EP6naleiFY%2fs1600%2fsample-logo2.png&ehk=EHvhwEZyZh%2f5rIZH6I0Zmr2pUXVWkh5fra0PqF%2fXLEA%3d&risl=&pid=ImgRaw&r=0"} width={'10%'} className="ml-2"/>
            <h1 className='text-gray-100 text-[16px] font-semibold mx-[30%] text-center leading-8'>Explore the world of Ceylon Gems, where beauty meets rarity. Our curated collection of exquisite gemstones showcases the vibrant hues and unmatched quality that Ceylon is renowned for. From sapphires that echo the ocean's depths to rubies that capture the fire of passion, our gems are a testament to nature's artistry. Join us in celebrating the allure of Ceylon's treasures and embark on a journey of timeless elegance.</h1>
            
            <div className="flex flex-row items-center border border-gray-100 rounded-sm shadow mt-[2%]">
              
      <input className='border-none outline-none bg-gray-800 p-2 text-white' />
      <BsFillSendCheckFill className='mr-3 my-2'/>

    </div>
            </div>
            
        </div>
    </div>
    )
   
}