import {Layout} from "@/components";
import Link from "next/link";

export default ()=>{
    return(
        <Layout isProfile={true}>
            <div style={{backgroundImage: 'url("https://i.postimg.cc/B6WFnrRs/Register-Banner.png")'}}>
            <div className={'mx-[20%]'} >
                <div className={'flex flex-row items-center justify-start'}>

                        <label htmlFor="doc" className="flex m-[5%] items-center p-4 rounded-full border border-gray-300 border-dashed bg-gray-50 cursor-pointer h-[120px] w-[120px]" style={{ backgroundImage: 'url("https://th.bing.com/th/id/OIP.GlXqxcR9EmviN5kuwaUsMQHaIB?pid=ImgDet&rs=1")',backgroundSize: 'cover', // This ensures the image covers the entire div
                            backgroundPosition: 'center' }}>



                            <input type="file" id="doc" name="doc" accept="png, jpg" hidden/>
                        </label>


                </div>
                <div className="grid grid-cols-2 w-[90%] mx-[5%] gap-5 mb-[5%]">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            First Name*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="Your First Name"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            Last Name*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="Your Last Name"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            Contact Number*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="0784455785"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            Email*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="Your Email"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 col-span-2">
                        <h1 className="text-gray-800 text-[16px] font-normal ">
                            Address Line 1*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="No 01, Apartment 06"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 col-span-2">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            Address Line 2
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="albuquerque"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            Country*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="USA"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            State*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="New York"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">City*</h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="New Mexico"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-gray-800 text-[16px] font-normal">
                            Zip Code*
                        </h1>
                        <div className="flex flex-col rounded shadow border border-gray-200">
                            <input
                                placeholder="70200"
                                className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                </div>
                <button className={'w-[88%] border border-blue-500 hover:border-white shadow-2xl rounded-md bg-white transition duration-300 hover:bg-blue-500 mx-10 mr-auto mt-3 group'}><h1 className={'text-blue-500 my-3 group-hover:text-white font-semibold'}>Register</h1></button>
                <div className={'flex flex-row items-center justify-start mx-10 mt-4'}>
                    <h1 className={'text-gray-700 font-semibold text-[14]'}>Already have an Account??</h1>
                    <Link href={'/login'} className={'text-blue-500 font-bold text-[16px] ml-3'}>
                       Login
                    </Link>
                </div>
            </div>
            </div>
           
        </Layout>
    )
}