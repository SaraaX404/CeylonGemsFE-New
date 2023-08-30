import { AuctionCard, Layout } from "@/components"
import Link from "next/link"

export default ()=>{
    return(
        <Layout>
            <div className="bg-gray-700 h-[400px] grid grid-cols-2">
                <div className="flex flex-col items-start mt-[12%] ml-[12%]">
                <h1 className="text-white text-[42px] font-bold">Live Auction</h1>
                <h1 className="text-white text-[22px] font-semibold">Home / Live Auction</h1>
                </div>
               
            </div>
            <div className="grid grid-cols-3 gap-2 mx-[10%] mt-[8%]">
                <Link href={`/details/${1}`}>
                <AuctionCard/>
                </Link>
                <Link href={`/details/${1}`}>
                <AuctionCard/>
                </Link>
                <Link href={`/details/${1}`}>
                <AuctionCard/>
                </Link>
                <Link href={`/details/${1}`}>
                <AuctionCard/>
                </Link>
                <Link href={`/details/${1}`}>
                <AuctionCard/>
                </Link>
                <Link href={`/details/${1}`}>
                <AuctionCard/>
                </Link>
                </div>
                <div className="flex flex-row justify-center items-center mt-[3%]">
                    <div className="border shadow rounded hover:bg-green-500 m-2 w-15"><h1 className="text-gray-700 p-2 font-semibold cursor-pointer hover:text-gray-100">PREV</h1></div>
                    <div className="border shadow  hover:bg-green-500 m-2 rounded-full"><h1 className="text-gray-700 p-2 px-4 font-semibold cursor-pointer hover:text-gray-100">1</h1></div>
                    <div className="border shadow  hover:bg-green-500 m-2 rounded-full"><h1 className="text-gray-700 p-2 px-4 font-semibold cursor-pointer hover:text-gray-100">2</h1></div>
                    <div className="border shadow  hover:bg-green-500 m-2 rounded-full"><h1 className="text-gray-700 p-2 px-4 font-semibold cursor-pointer hover:text-gray-100">3</h1></div>
                    <div className="border shadow rounded hover:bg-green-500 m-2 w-15"><h1 className="text-gray-700 p-2 font-semibold cursor-pointer hover:text-gray-100">NEXT</h1></div>
                </div>
        </Layout>
    )
}