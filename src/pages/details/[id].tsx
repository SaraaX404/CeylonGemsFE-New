import { Layout } from "@/components"

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
            </div>
                    
                </div>
        </Layout>
    )
}