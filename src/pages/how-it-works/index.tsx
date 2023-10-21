/* eslint react/no-unescaped-entities */
import { Layout } from "@/components"
import { BiChat } from "react-icons/bi";
import { FaGavel, FaGlobe, FaLifeRing, FaShieldAlt, FaUserPlus } from 'react-icons/fa';
import Image from "next/image";
import RegisterImage from '../../public/register.svg'
import BidImage from '../../public/bid.svg'
import SelectImage from '../../public/select.svg'
import WinImage from '../../public/win.svg'

export default ()=>{
    return(
    <Layout>
  <div className="bg-gray-700 h-[400px] grid grid-cols-2">
                <div className="flex flex-col items-start mt-[12%] ml-[12%]">
                <h1 className="text-white text-[42px] font-bold">How It Works</h1>
                <h1 className="text-white text-[22px] font-semibold">Home / How It Works</h1>
                </div>
                </div>
        <div className="grid grid-cols-2 gap-6 mt-[5%] mx-[10%]">
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-green-500 text-[38px] font-bold">01.</h1>
                <h1 className="text-gray-800 text-[28px] font-bold">Register Now & Start Selleing Your Things</h1>
                <div>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">
        Step into a world where exquisite gems find their perfect admirers – your journey of buying and selling precious stones starts here. With a simple registration, you're poised to explore a dazzling array of gemstones, from radiant diamonds to vibrant colored gems.
    </h1>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">Experience confident real-time bidding. Start your gem-filled journey today – register now and join a community that cherishes the extraordinary.</h1>
   
</div>

            </div>  
            <div className="ml-[20%]">
                <Image src={RegisterImage} alt="Register" width={400} height={400}/>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-[5%] mx-[10%]">
            <div className="mt-[20%]">
            <Image src={BidImage} alt="Bid" width={400} height={400}/>
            </div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-green-500 text-[38px] font-bold">02.</h1>
                <h1 className="text-gray-800 text-[28px] font-bold">Add Your Stones for bidding</h1>
                <div>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">
        Elevate your collection with us! Uncover splendid gemstones on our exclusive platform. From radiant diamonds to captivating colored gems, explore an exquisite range with a simple registration.
    </h1>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">
        Immerse in real-time bidding's excitement – each moment promises rare gems. Start your journey now, connect with a community sharing your enthusiasm for these creations. Your next gem awaits, ready to be cherished among fellow connoisseurs.
    </h1>
</div>


            </div>  
        </div>
        <div className="grid grid-cols-2 gap-6 mt-[5%] mx-[10%]">
            
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-green-500 text-[38px] font-bold">03.</h1>
                <h1 className="text-gray-800 text-[28px] font-bold">Select a Stone</h1>
                <div>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">
        Explore the art of selecting exquisite gemstones with us! Embark on a journey where each stone holds beauty and value. Register now to discover a diverse selection of gems, from timeless diamonds to captivating colored stones.
    </h1>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">
        Immerse yourself in the thrill of choice – each gem tells a unique story. Join our platform and become part of a community passionate about these treasures. Your perfect gemstone awaits, ready to be selected and cherished for a lifetime.
    </h1>
</div>


            </div>  
            <div className="ml-[20%] mt-[10%]">
                <Image src={SelectImage} alt="Select" width={500} height={500}/>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-[5%] mx-[10%]">
            <div>
            <Image src={WinImage} alt="Win" width={500} height={500}/>
            </div>
            <div className="flex flex-col items-start justify-start">
                <h1 className="text-green-500 text-[38px] font-bold">04.</h1>
                <h1 className="text-gray-800 text-[28px] font-bold">Bid and Win</h1>
                <div>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">
        Dive into a realm of excitement – bid and win stunning gems! Fuel your passion for precious stones and engage in the art of bidding. With an easy registration, access a curated collection, featuring everything from dazzling diamonds to captivating colored treasures.
    </h1>
    <h1 className="text-gray-600 text-[18px] font-semibold leading-9 text-justify">
        Feel the rush of real-time bidding, where each click could lead to claiming a remarkable gem. Join us today and become part of a community that shares your appreciation for these extraordinary natural wonders. Your winning bid awaits – embark on your journey of bidding and acquiring timeless beauty now.
    </h1>
</div>

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