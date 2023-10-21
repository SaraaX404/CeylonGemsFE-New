import { Layout } from "@/components"
import { BiChat } from "react-icons/bi";
import { FaGavel, FaGlobe, FaLifeRing, FaShieldAlt, FaUserPlus } from 'react-icons/fa';
import Image from 'next/image'
import WelcomeImage from '../../public/welcome.svg'

export default ()=>{
    return(
    <Layout>
  <div className="bg-gray-700 h-[400px] grid grid-cols-2">
                <div className="flex flex-col items-start mt-[12%] ml-[12%]">
                <h1 className="text-white text-[42px] font-bold">How It Works</h1>
                <h1 className="text-white text-[22px] font-semibold">Home / How It Works</h1>
                </div>
                </div>
                <div className="mt-[5%] h-[400px] grid grid-cols-2">
                    <div className="ml-[10%]">
                        <Image src={WelcomeImage} alt="Welcome" width={450} height={450}/>
                    </div>
                    <div className="flex flex-col items-start justify-start mr-[3%]">
                        <h1 className="text-gray-700 text-[32px] font-semibold">Welcome to Ceylon Gems: Your Gateway to Global Gem Trade!</h1>
                        <h1 className="text-gray-600 text-[16px] font-normal mt-[3%] leading-8 text-justify">Ceylon Gems is your dedicated platform, connecting local gem sellers with discerning foreign gem buyers. We've crafted a seamless marketplace that benefits both parties, providing an excellent opportunity for local sellers to showcase their treasures to a worldwide audience and for international buyers to access an array of exquisite gemstones.</h1>
                        <h1 className="text-gray-600 text-[16px] font-normal leading-8 text-justify">Our commitment to excellence and innovation ensures a trusted, thriving community for gem enthusiasts. Join us at Ceylon Gems, where the world's finest gems find their way into your hands.</h1>
                    </div>
                </div>
       
       
       

        <div className="flex flex-col items-center justify-center mx-[30%] mt-[7%]">
            <h1 className="text-gray-800 text-[38px] font-bold" >Why choose Us?</h1>
            <h1 className="text-gray-600 text-[18px] font-semibold mt-[3%] text-center">Discover excellence on the world's premier Gem Bidding platform, featuring exquisite treasures. Your satisfaction, achievements, and future prosperity motivate us to be your ideal gem bidding companion.</h1>
        </div>
        <div className="mx-[10%] mt-[5%] grid grid-cols-3 gap-5">
            <div className="w-80 h-40 border-neutral-50 shadow rounded-lg group cursor-help">
                <div className="flex flex-row items-center justify-between">
                   
                    <h1 className="text-[80px] mx-3 mb-1 text-gray-200 group-hover:text-gray-500 transition-colors duration-300">01</h1>
                    <FaUserPlus className="text-gray-500 mx-3"size="80" />
                </div>
                <h1 className="mx-3 text-[24px] mb-1 text-gray-200 group-hover:text-gray-500 font-semibold transition-colors duration-300">Easy Registration</h1>
            </div>
            <div className="w-80 h-40 border-neutral-50 shadow rounded-lg group cursor-help">
                <div className="flex flex-row items-center justify-between">
                   
                    <h1 className="text-[80px] mx-3 mb-1 text-gray-200 group-hover:text-gray-500 transition-colors duration-300">02</h1>
                    <FaGlobe className="text-gray-500 mx-3"size="80" />
                </div>
                <h1 className="mx-3 text-[24px] mb-1 text-gray-200 group-hover:text-gray-500 font-semibold transition-colors duration-300">Wide Audience Reach</h1>
            </div>
            <div className="w-80 h-40 border-neutral-50 shadow rounded-lg group cursor-help">
                <div className="flex flex-row items-center justify-between">
                   
                    <h1 className="text-[80px] mx-3 mb-1 text-gray-200 group-hover:text-gray-500 transition-colors duration-300">03</h1>
                    <FaLifeRing className="text-gray-500 mx-3"size="80" />
                </div>
                <h1 className="mx-3 text-[24px] mb-1 text-gray-200 group-hover:text-gray-500 font-semibold transition-colors duration-300">Expert Support</h1>
            </div>
            <div className="w-80 h-40 border-neutral-50 shadow rounded-lg group cursor-help">
                <div className="flex flex-row items-center justify-between">
                   
                    <h1 className="text-[80px] mx-3 mb-1 text-gray-200 group-hover:text-gray-500 transition-colors duration-300">04</h1>
                    <BiChat className="text-gray-500 mx-3"size="80" />
                </div>
                <h1 className="mx-3 text-[24px] mb-1 text-gray-200 group-hover:text-gray-500 font-semibold transition-colors duration-300">Real-time Chat System</h1>
            </div>
            <div className="w-80 h-40 border-neutral-50 shadow rounded-lg group cursor-help">
                <div className="flex flex-row items-center justify-between">
                   
                    <h1 className="text-[80px] mx-3 mb-1 text-gray-200 group-hover:text-gray-500 transition-colors duration-300">05</h1>
                    <FaShieldAlt className="text-gray-500 mx-3"size="80" />
                </div>
                <h1 className="mx-3 text-[24px] mb-1 text-gray-200 group-hover:text-gray-500 font-semibold transition-colors duration-300">Secure KYC Verification</h1>
            </div>
            <div className="w-80 h-40 border-neutral-50 shadow rounded-lg group cursor-help">
                <div className="flex flex-row items-center justify-between">
                   
                    <h1 className="text-[80px] mx-3 mb-1 text-gray-200 group-hover:text-gray-500 transition-colors duration-300">06</h1>
                    <FaGavel className="text-gray-500 mx-3"size="80" />
                </div>
                <h1 className="mx-3 text-[24px] mb-1 text-gray-200 group-hover:text-gray-500 font-semibold transition-colors duration-300">Clear Bidding Process</h1>
            </div>
            
        </div>

    </Layout>
    )
}