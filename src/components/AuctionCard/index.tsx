import { BsShare } from "react-icons/bs"

export default ()=>{
    return(<div className="flex flex-col justify-start shadow border rounded cursor-pointer">
        <div className=" overflow-hidden">
        <div
          className="hover:scale-105 transition-transform duration-300"
          style={{
            width: '100%',
            height: '200px', // Set the desired height here
            backgroundImage:
              'url(https://th.bing.com/th/id/OIP.qJBTfJXGlUYjVewGb9rbpgHaHa?pid=ImgDet&rs=1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div>
        <div className="m-3">
            <h1 className="text-gray-700 text-[24px] font-bold">Golden Ruby for Sale</h1>
            <div className="flex flex-row items-center mt-[3%]">
                <h1 className="text-gray-500 text-[16px] font-normal">Bidding Price:</h1><h1 className="text-gray-700 text-[16px] font-semibold">$85.9</h1>
            </div>
            <div className="flex flex-row justify-between items-center mt-[3%]">
                <div className="bg-green-600 border-neutral-50 rounded"><h1 className="text-gray-100 text-[16px] font-semibold px-3 py-2 "> Place A Bid</h1></div>
                <BsShare/>
            </div>
            
        </div>
      </div>

        
        


    </div>)
}