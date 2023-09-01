import { Layout } from "@/components";
import { AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { BiSolidDashboard, BiLogOutCircle } from "react-icons/bi";
import { BsGem } from "react-icons/bs";
import { useState } from "react";

export default () => {
  const [state, setState] = useState<
    "Profile" | "Dashboard" | "My Biddings" | "My Stones"
  >("Profile");

  return (
    <Layout isProfile>
      <div className="bg-gray-700 h-[400px] grid grid-cols-2">
        <div className="flex flex-col items-start mt-[12%] ml-[12%]">
          <h1 className="text-white text-[42px] font-bold">Profile</h1>
          <h1 className="text-white text-[22px] font-semibold">
            Home / Profile
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-start mx-[10%] mt-[5%]">
        <div className="flex flex-col w-[25%]  h-[500px] m-5">
          {state != "Profile" && (
            <div onClick={()=> setState("Profile")} className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2 text-gray-600 group-hover:text-white font-semibold text-[22px] transition-colors duration-600">
                User Profile{" "}
              </h1>{" "}
              <AiOutlineUser
                size={22}
                className="mr-2 text-gray-600 group-hover:text-white transition-colors duration-600"
              />
            </div>
          )}
          {state == "Profile" && (
            <div className="group  m-2 bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2  text-white font-semibold text-[22px] transition-colors duration-600">
                User Profile{" "}
              </h1>{" "}
              <AiOutlineUser size={22} className="mr-2  text-white" />
            </div>
          )}
          {state != "Dashboard" && (
            <div onClick={()=> setState("Dashboard")} className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2 text-gray-600 group-hover:text-white font-semibold text-[22px] transition-colors duration-600">
                Dashboard{" "}
              </h1>{" "}
              <BiSolidDashboard
                size={22}
                className="mr-2 text-gray-600 group-hover:text-white transition-colors duration-600"
              />
            </div>
          )}
          {state == "Dashboard" && (
            <div className="group  m-2 bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2  text-white font-semibold text-[22px] transition-colors duration-600">
                Dashboard{" "}
              </h1>{" "}
              <BiSolidDashboard size={22} className="mr-2  text-white" />
            </div>
          )}
          {state  != "My Biddings" && (
            <div onClick={()=> setState("My Biddings")} className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2 text-gray-600 group-hover:text-white font-semibold text-[22px] transition-colors duration-600">
                My Biddings
              </h1>{" "}
              <BsGem
                size={22}
                className="mr-2 text-gray-600 group-hover:text-white transition-colors duration-600"
              />
            </div>
          )}
          {state == "My Biddings" && (
            <div className="group  m-2 bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2  text-white font-semibold text-[22px] transition-colors duration-600">
                My Biddings{" "}
              </h1>{" "}
              <BsGem size={22} className="mr-2  text-white" />
            </div>
          )}
          {state != "My Stones" && (
            <div onClick={()=> setState("My Stones")} className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2 text-gray-600 group-hover:text-white font-semibold text-[22px] transition-colors duration-600">
                My Stones
              </h1>{" "}
              <AiFillShopping
                size={22}
                className="mr-2 text-gray-600 group-hover:text-white transition-colors duration-600"
              />
            </div>
          )}
          {state == "My Stones" && (
            <div className="group  m-2 bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
              <h1 className="px-4 py-2  text-white font-semibold text-[22px] transition-colors duration-600">
                My Stones{" "}
              </h1>{" "}
              <AiFillShopping size={22} className="mr-2  text-white" />
            </div>
          )}

          <div className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between">
            <h1 className="px-4 py-2 text-gray-600 group-hover:text-white font-semibold text-[22px] transition-colors duration-600">
              Logout{" "}
            </h1>{" "}
            <BiLogOutCircle
              size={22}
              className="mr-2 text-gray-600 group-hover:text-white transition-colors duration-600"
            />
          </div>
        </div>
        <div className="flex flex-col items-start ml-[7%] bg-white w-[80%]">
            <div className="flex flex-row items-center justify-start gap-5 m-10">
                <img src="https://th.bing.com/th/id/OIP.13uCmzOQ0gNtEeMTeIqUsAHaHa?pid=ImgDet&rs=1" width={100} className="rounded-full"/>
                <div className="flex flex-col justify-center">
                    <h1 className="text-gray-800 text-[30px] font-semibold">
                    Sara Tancredi
                    </h1>
                    <div className="flex flex-row items-center">
                    <h1 className="text-gray-500 text-[22px] font-semibold">
                    Sri Lanka
                    </h1>
                    <img src="https://th.bing.com/th/id/OIP.bcp-2ZvzcfHtNmVGTY0__wHaHa?pid=ImgDet&rs=1" width={22} className="rounded-full ml-3"/>
                    </div>
                    
                    

                    
                </div>
               
            </div>
            <div className="grid grid-cols-2 w-[90%] mx-[5%] gap-5 mb-[5%]">
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">First Name*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="Your First Name" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">Last Name*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="Your Last Name" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">Contact Number*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="0784455785" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">Email*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="Your Email" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
               
                <div className="flex flex-col gap-1 col-span-2">
                    <h1 className="text-gray-800 text-[16px] font-normal ">Address Line 1*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="No 01, Apartment 06" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                    <h1 className="text-gray-800 text-[16px] font-normal">Address Line 2</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="albuquerque" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">Country*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="USA" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">State*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="New York" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">City*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="New Mexico" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
               
                <div className="flex flex-col gap-1">
                    <h1 className="text-gray-800 text-[16px] font-normal">Zip Code*</h1>
                    <div className="flex flex-col rounded shadow border border-gray-200"><input placeholder="70200" className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"/></div>
                </div>
               
            </div>
        </div>
      </div>
    </Layout>
  );
};
