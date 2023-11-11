import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiOutlineComment } from "react-icons/ai"
import { BiCommentDetail } from "react-icons/bi"
import {BsFacebook, BsTwitter, BsInstagram, BsSearch, BsFillSendCheckFill} from 'react-icons/bs'
import { CiFaceSmile } from "react-icons/ci"
import { SlPeople } from "react-icons/sl"
import Logo from '../../public/White.svg'
import WhiteLogo from '../../public/Black.svg'
import Image from "next/image";
import { useUserContext } from "@/context"
import ChatBar from '@/components/SlideMenu'
type PropTypes = {
    children: React.ReactNode
    isProfile?: boolean 
}


export default (props:PropTypes)=>{

    const [showContactBar, setShowContactBar] = useState(false);

    const UserCTX = useUserContext()
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

            <Image src={Logo} width={120} className="m-3" alt={"logo"}/>
            <div className="col-span-4">
                <div className="mx-7 flex flex-row items-center justify-evenly">
                    <Link href={'/'}><h1 className="font-semibold text-gray-600 cursor-pointer">Home</h1></Link>
                    <Link href={'/about-us'}> <h1 className="font-semibold text-gray-600 cursor-pointer">About Us</h1></Link>
                    <Link href={'/how-it-works'}><h1 className="font-semibold text-gray-600 cursor-pointer">How It Works</h1></Link>
                    {UserCTX.user&&(
                      <Link href={'/products'}><h1 className="font-semibold text-gray-600 cursor-pointer">Browse Product</h1></Link>
                    )}
                    {UserCTX.user&&(
                      <Link href={'/create-product'}><h1 className="font-semibold text-gray-600 cursor-pointer">Create Product</h1></Link>
                    )}
                    <h1 className="font-semibold text-gray-600 cursor-pointer">Contact</h1>
                    <ChatBar/>
                </div>
            </div>
            {UserCTX.user?(
               <div className="flex flex-row items-center justify-evenly">
               <button><BsSearch/></button>
               <Link href="/profile"><button className="border rounded text-[16px] text-gray-600 p-3">My Account</button></Link>
           </div>
            ):(
            <div className="flex flex-row items-center justify-evenly">
                <Link href="/login"><button className="border rounded text-[16px] text-gray-600 p-3">Login</button></Link>
            </div>
            )}
            
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
          
        <div className='bg-gray-800 h-[550px] mt-[8%]'>
            <div className='flex flex-col items-center'>
                <Image src={WhiteLogo} width={200} className="m-3" alt={"logo"}/>
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