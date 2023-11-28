import { AuctionCard, Layout, LineChart } from "@/components";
import { AiOutlineUser, AiFillShopping } from "react-icons/ai";
import { BiSolidDashboard, BiLogOutCircle, BiLineChart } from "react-icons/bi";
import { BsGem } from "react-icons/bs";
import { useEffect, useState } from "react";
import {
  FaCheck,
  FaClock,
  FaFacebookMessenger,
  FaMoneyBill,
  FaShoppingBag,
} from "react-icons/fa";
import Link from "next/link";
import { GetUserDetailsResponse } from "@/models";
import { useQuery } from "react-query";
import { GetProfile } from "@/services/AuthService";
import { GetBidsResponse } from "@/models/BidsModel";
import { getBidsBySeller } from "@/services/BidsService";
import { useUserContext } from "@/context";
import { GetAllPostsResponse } from "@/models/ProductModels";
import { GetPostsSeller } from "@/services/ProductsService";
import ChatBar from "../../components/SlideMenu";

const rows = [1, 2, 3, 4, 5, 6];

export default () => {
  const [state, setState] = useState<
    "Profile" | "Dashboard" | "My Biddings" | "My Stones"
  >("Profile");

  const UserCTX = useUserContext();
  const [profile, setProfile] = useState<GetUserDetailsResponse>(
    {} as GetUserDetailsResponse
  );
  const [bids, setBids] = useState<GetBidsResponse[]>([]);

  const { data, error } = useQuery<GetUserDetailsResponse, Error>(
    "Profile",
    () => GetProfile()
  );
  const { data: bidData, refetch } = useQuery<GetBidsResponse[], Error>(
    "Bids",
    () => getBidsBySeller()
  );

  const ChatButton = () => {
    return (
      <div className="flex flex-col items-center w-[86px] py-2">
        <FaFacebookMessenger size={10} className="text-blue-600" />{" "}
        <h1 className="text-[10px] text-gray-600 font-semibold  ">Chat</h1>{" "}
      </div>
    );
  };

  const { data: postData } = useQuery<GetAllPostsResponse[], Error>(
    "Posts",
    () => GetPostsSeller()
  );
  useEffect(() => {
    if (data) {
      setProfile(data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [UserCTX.user?._id]);

  useEffect(() => {
    if (Array.isArray(bidData)) {
      setBids(bidData);
    }
  }, [bidData]);

  return (
    <Layout>
      <div className="bg-gray-700 h-[400px] grid grid-cols-2">
        <div className="flex flex-col items-start mt-[12%] ml-[12%]">
          <h1 className="text-white text-[42px] font-bold">Profile</h1>
          <h1 className="text-white text-[22px] font-semibold">
            Home / Profile
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-start mx-[5%] mt-[5%]">
        <div className="flex flex-col w-[25%]  h-[500px] m-3">
          {state != "Profile" && (
            <div
              onClick={() => setState("Profile")}
              className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between"
            >
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
            <div
              onClick={() => setState("Dashboard")}
              className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between"
            >
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
          {state != "My Biddings" && (
            <div
              onClick={() => setState("My Biddings")}
              className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between"
            >
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
            <div
              onClick={() => setState("My Stones")}
              className="group bg-white m-2 hover:bg-green-600 transition-colors duration-300 border-neutral-50 rounded cursor-pointer flex flex-row items-center justify-between"
            >
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
        {state == "Profile" && (
          <div className="flex flex-col items-start m-3 bg-white w-[63%]">
            <div className="flex flex-row items-center justify-start gap-5 m-10">
              <img
                src="https://th.bing.com/th/id/OIP.13uCmzOQ0gNtEeMTeIqUsAHaHa?pid=ImgDet&rs=1"
                width={100}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-gray-800 text-[30px] font-semibold">
                  {profile.first_name} {profile.last_name}
                </h1>
                <div className="flex flex-row items-center">
                  <h1 className="text-gray-500 text-[22px] font-semibold">
                    {profile.country}
                  </h1>
                  <img
                    src="https://th.bing.com/th/id/OIP.bcp-2ZvzcfHtNmVGTY0__wHaHa?pid=ImgDet&rs=1"
                    width={22}
                    className="rounded-full ml-3"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 w-[90%] mx-[5%] gap-5 mb-[5%]">
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-800 text-[16px] font-normal">
                  First Name*
                </h1>
                <div className="flex flex-col rounded shadow border border-gray-200">
                  <input
                    placeholder="Your First Name"
                    value={profile.first_name}
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
                    value={profile.last_name}
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
                    value={profile.mobile}
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
                    value={profile.email}
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
                    value={profile.address_01}
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
                    value={profile.address_02}
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
                    value={profile.country}
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
                    value={profile.country}
                    className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-800 text-[16px] font-normal">City*</h1>
                <div className="flex flex-col rounded shadow border border-gray-200">
                  <input
                    placeholder="New Mexico"
                    value={profile.city}
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
                    value={profile.zip_code}
                    className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {state == "Dashboard" && (
          <div className="  w-[63%] m-3">
            <div className="grid grid-cols-2">
              <div className="flex flex-col mx-5 my-2 rounded-sm border shadow h-[88%] hover:scale-105 transition-transform cursor-pointer bg-white">
                <div className="flex flex-row items-center bg-gray-800 w-[100%]">
                  <h1 className="text-white text-[16px] font-bold mx-3 my-2">
                    Bid Pending
                  </h1>
                </div>
                <div className="flex flex-row justify-between items-center m-3">
                  <h1 className="text-gray-600 text-[48px]">20</h1>
                  <FaClock className="text-gray-600 text-[48px]" />
                </div>
              </div>
              <div className="flex flex-col mx-5 my-2 border shadow h-[88%] hover:scale-105 transition-transform cursor-pointer bg-white">
                <div className="flex flex-row items-center bg-gray-800 w-[100%]">
                  <h1 className="text-white text-[16px] font-bold mx-3 my-2">
                    Bid Accepted
                  </h1>
                </div>
                <div className="flex flex-row justify-between items-center m-3">
                  <h1 className="text-gray-600 text-[48px]">40</h1>
                  <FaCheck className="text-gray-600 text-[48px]" />
                </div>
              </div>
              <div className="flex flex-col mx-5 my-2 border shadow h-[88%] hover:scale-105 transition-transform cursor-pointer bg-white">
                <div className="flex flex-row items-center bg-gray-800 w-[100%]">
                  <h1 className="text-white text-[16px] font-bold mx-3 my-2">
                    Total Listenings
                  </h1>
                </div>
                <div className="flex flex-row justify-between items-center m-3">
                  <h1 className="text-gray-600 text-[48px]">40</h1>
                  <FaShoppingBag className="text-gray-600 text-[48px]" />
                </div>
              </div>
              <div className="flex flex-col mx-5 my-2 border shadow h-[88%] hover:scale-105 transition-transform cursor-pointer bg-white">
                <div className="flex flex-row items-center bg-gray-800 w-[100%]">
                  <h1 className="text-white text-[16px] font-bold mx-3 my-2">
                    Total Sales
                  </h1>
                </div>
                <div className="flex flex-row justify-between items-center m-3">
                  <h1 className="text-gray-600 text-[48px]">80</h1>
                  <BiLineChart className="text-gray-600 text-[48px]" />
                </div>
              </div>
            </div>
            <LineChart />
          </div>
        )}

        {state == "My Biddings" && (
          <div className="grid grid-cols-1 w-[64%] bg-white mt-[2%]">
            <div className="grid grid-cols-8 ">
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[12px] text-gray-600 font-semibold w-[50px] ml-[20%] py-3">
                  Image
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center col-span-2">
                <h1 className="text-[12px] text-gray-600 font-semibold  py-3">
                  Bidding ID
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[12px] text-gray-600 font-semibold py-3">
                  Start Price
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[12px] text-gray-600 font-semibold  py-3">
                  Bid Amount
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[12px] text-gray-600 font-semibold py-3">
                  Highest Bid
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[12px] text-gray-600 font-semibold  py-3">
                  Status
                </h1>
              </div>
              <div className="flex flex-row border border-gray-200 bg-gray-200 shadow justify-center">
                <h1 className="text-[12px] text-gray-600 font-semibold  py-3">
                  Action
                </h1>
              </div>
            </div>
            {bids.map((y, x) => (
              <div className="grid grid-cols-8 hover:bg-gray-200">
                <div className="flex flex-row border border-gray-200  shadow  justify-center items-center">
                  <h1 className="text-[10px] text-gray-600 font-semibold w-[50px] py-1">
                    {" "}
                    <div className="flex flex-row   justify-center w-[51.3px]">
                      <div className=" border border-neutral-50 rounded w-[40px] h-[40px] p-[5px]">
                        <img
                          style={{ borderRadius: "10%" }}
                          src="https://th.bing.com/th/id/OIP.qJBTfJXGlUYjVewGb9rbpgHaHa?pid=ImgDet&rs=1"
                        />
                      </div>
                    </div>
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200  shadow justify-center items-center col-span-2">
                  <h1 className="text-[10px] text-gray-600 font-semibold  py-1">
                    {y?._id}
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200  shadow justify-center items-center">
                  <h1 className="text-[10px] text-gray-600 font-semibold py-1">
                    {y?.price} (LKR)
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200 shadow justify-center items-center">
                  <h1 className="text-[10px] text-gray-600 font-semibold  py-1">
                    {y?.postID?.start_price} (LKR)
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200  shadow justify-center items-center">
                  <h1 className="text-[10px] text-gray-600 font-semibold py-1">
                    {y?.postID?.highestPrice} (LKR)
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200  shadow justify-center items-center">
                  <h1 className="text-[10px] text-gray-600 font-semibold  py-1">
                    <div className="flex flex-row  justify-center items-center">
                      <h1
                        className="text-[12px] font-normal w-[102px] py-3"
                        style={{
                          color:
                            y?.status === "REJECTED"
                              ? "red"
                              : y.status === "ACCEPTED"
                              ? "green"
                              : "blue",
                          marginLeft: x % 2 == 0 ? "27%" : "25%",
                        }}
                      >
                        {y?.status}
                      </h1>
                    </div>
                  </h1>
                </div>
                <div className="flex flex-row border border-gray-200 shadow justify-center items-center">
                  <div className="flex flex-row  cursor-pointer">
                    {y.status === "ACCEPTED" ? (
                      <ChatBar ChatButton={ChatButton} name={y.postID.seller_id.first_name} id={y.postID.seller_id._id}/>
                    ) : (
                      <div className="flex flex-col items-center w-[86px] py-2">
                        <FaMoneyBill size={10} className="text-green-600" />
                        <h1 className="text-[10px] text-gray-600 font-semibold  ">
                          Re Bid
                        </h1>
                      </div>
                    )}
                  </div>
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
        )}

        {state == "My Stones" && (
          <div className="border border-neutral-50 rounded shadow w-[64%] bg-white mt-[2%] ">
            <div className="grid grid-cols-2 gap-5 m-3">
              {postData?.map((x) => (
                <Link href={`/my-details/1`}>
                  <AuctionCard
                    isProfile
                    name={x.name}
                    key={x._id}
                    price={x.start_price}
                    photo={x.photos[0].photo}
                  />
                </Link>
              ))}
            </div>
            <div className="flex flex-row justify-center items-center my-[3%]">
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
        )}
      </div>
    </Layout>
  );
};
