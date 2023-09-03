import { AuctionCard, Layout } from "@/components"
import { BsSearch } from "react-icons/bs"
import { FaFacebookMessenger, FaMoneyBill } from "react-icons/fa"


const rows = [1,2,3]

export default ()=>{
    return(
        <Layout>
          <div className="bg-gray-700 h-[400px] grid grid-cols-2">
                <div className="flex flex-col items-start mt-[12%] ml-[12%]">
                <h1 className="text-white text-[42px] font-bold">Auction Details</h1>
                <h1 className="text-white text-[22px] font-semibold">Home / Auction Details</h1>
                </div>
                
               
            </div>  
            <div className="grid grid-cols-2 mt-[8%]">
            <div className="flex flex-row items-start ">
            <div className="flex flex-row items-center ml-[20%] ">
      <div className="grid grid-rows-3 gap-2">
        <div
          className="hover:scale-105 transition-transform duration-300"
          style={{
            width: '120px',
            height: '120px', // Set the desired height here
            backgroundImage:
              'url(https://th.bing.com/th/id/OIP.qJBTfJXGlUYjVewGb9rbpgHaHa?pid=ImgDet&rs=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className="hover:scale-105 transition-transform duration-300"
          style={{
            width: '120px',
            height: '120px', // Set the desired height here
            backgroundImage:
              'url(https://th.bing.com/th/id/OIP.qJBTfJXGlUYjVewGb9rbpgHaHa?pid=ImgDet&rs=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className="hover:scale-105 transition-transform duration-300"
          style={{
            width: '120px',
            height: '120px', // Set the desired height here
            backgroundImage:
              'url(https://th.bing.com/th/id/OIP.qJBTfJXGlUYjVewGb9rbpgHaHa?pid=ImgDet&rs=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div className="flex flex-col items-center ml-4 my-4">
        <div
          className="hover:scale-105 transition-transform duration-300"
          style={{
            width: '300px', // Set the desired width here
            height: '376px', // Set the desired height here
            backgroundImage:
              'url(https://th.bing.com/th/id/OIP.qJBTfJXGlUYjVewGb9rbpgHaHa?pid=ImgDet&rs=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
     
            </div>
            <div className="flex flex-col items-start ">
                <h1 className="text-gray-600 text-[32px] font-bold">Unveil the Beauty Within: Discover Extraordinary Gems for Sale!</h1>
                <h1 className="mr-[14%] text-gray-500 text-[16px] font-semibold leading-8 mt-3">Unlocking Nature's Treasures: Embark on a Journey of Luxury with our Dazzling Gems, Available for Your Delight.</h1>
                <div className="flex flex-row items-center justify-start mt-[2%]">
                    <h1 className="text-gray-400 text-[32px] font-normal tracking-wide">Bidding Price :</h1><h1 className="text-gray-600 text-[32px] font-semibold ml-2">400$</h1>
                </div>
                
                  
                   
                 <div className="grid grid-cols-2 w-[100%]">
                 <div className="cursor-pointer bg-red-600 mt-[9%] mr-[4%] border-neutral-50 rounded flex flex-row items-center justify-center h-[60%] "><h1 className="text-gray-100 text-[16px] font-semibold px-3 py-2 "> Delete </h1></div>
                <div className="cursor-pointer bg-blue-600 mt-[9%] mr-[4%] border-neutral-50 rounded flex flex-row items-center justify-center h-[60%] "><h1 className="text-gray-100 text-[16px] font-semibold px-3 py-2 "> Close </h1></div>
                </div>      
            
              
               
          
                 
               
            </div>
                    
                </div>
          
             
               <div className="flex flex-col items-center border-b border-gray-300">
               <h1 className="text-[18px] text-gray-700 font-semibold m-5">Current Bids</h1>
               </div>
                
                  
                   
                   
                <div className="grid grid-cols-1 w-[100%] bg-white mt-[2%]">
            <div className="grid grid-cols-4 ">
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[14px] text-gray-700 font-semibold w-[50px] py-3">
                  Name
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[14px] text-gray-700 font-semibold  py-3">
                  Amount
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[14px] text-gray-700 font-semibold py-3">
                 Date
                </h1>
              </div>
             
              
             
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[14px] text-gray-700 font-semibold  py-3">
                  Action
                </h1>
              </div>
            </div>
            {rows.map((x) => (
              <div className="grid grid-cols-4 hover:bg-gray-200">
                <div className="flex flex-row border border-gray-200  shadow  justify-center items-center">
                
                    <div className="flex flex-row   justify-center ">
                      <div className=" border border-neutral-50 rounded p-[5px]">
                        <h1 className="text-[13px] text-gray-600 font-semibold  py-1">
                        Kasun Kalhara
                        </h1>
                      </div>
                    </div>
                  
                </div>
                <div className="flex flex-row border border-gray-200  shadow justify-center items-center">
                  <h1 className="text-[13px] text-gray-600 font-semibold  py-1">
                    {10000 * x} (LKR)
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200  shadow justify-center items-center">
                  <h1 className="text-[13px] text-gray-600 font-semibold py-1">
                    2023-08-05
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200 shadow justify-center items-center">
                 
                  <FaFacebookMessenger
                          size={13}
                          className="text-blue-600 cursor-pointer"
                        />
                 
                </div>
                
                
               
              </div>
            ))}
            <div className="flex flex-row justify-center items-center mt-[3%]">
              <div className="border shadow rounded hover:bg-green-500 m-2 w-15">
                <h1 className="text-gray-700 p-2 font-semibold cursor-pointer hover:text-gray-100">
                  PREV
                </h1>
              </div>
              <div className="border shadow  hover:bg-green-500 m-2 rounded-full">
                <h1 className="text-gray-700 p-2 px-4 font-semibold cursor-pointer hover:text-gray-100">
                  1
                </h1>
              </div>
              <div className="border shadow  hover:bg-green-500 m-2 rounded-full">
                <h1 className="text-gray-700 p-2 px-4 font-semibold cursor-pointer hover:text-gray-100">
                  2
                </h1>
              </div>
              <div className="border shadow  hover:bg-green-500 m-2 rounded-full">
                <h1 className="text-gray-700 p-2 px-4 font-semibold cursor-pointer hover:text-gray-100">
                  3
                </h1>
              </div>
              <div className="border shadow rounded hover:bg-green-500 m-2 w-15">
                <h1 className="text-gray-700 p-2 font-semibold cursor-pointer hover:text-gray-100">
                  NEXT
                </h1>
              </div>
            </div>
          </div>
              
               
          
                 
               
           
        </Layout>
    )
}