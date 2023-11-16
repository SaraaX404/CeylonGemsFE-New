import { AuctionCard, Layout } from "@/components";
import { GetAllPostsResponse } from "@/models/ProductModels";
import { GetPostsById } from "@/services/ProductsService";
import { BsSearch } from "react-icons/bs";
import { useMutation, useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CreateBid } from "@/services/BidsService";
import { CreateBidRequest } from "@/models/BidsModel";
import {toast} from 'react-toastify'

const sample = [1, 2, 3];

export default () => {
  

  const {query} = useRouter()

  const [post, setPost] = useState<GetAllPostsResponse>(
    {} as GetAllPostsResponse
  );

  const [price, setPrice] = useState<number>(0)

  const { data, error, refetch } = useQuery<GetAllPostsResponse, Error>("posts", () =>
    
    GetPostsById(query?.id || ' ')
  );

  useEffect(()=>{
    refetch()
  },[data])

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  const bidMutation = useMutation<boolean, Error, CreateBidRequest, unknown>(CreateBid);
  
  let bidData:CreateBidRequest= {
    postID:(Array.isArray(query.id)|| query.id == undefined)?' ':query.id,
    price:price
  }

  const makeBid = async()=>{
    let res = await bidMutation.mutateAsync(bidData)


    if(res){
      toast.success('Bid created successfully')
    }else{
      toast.error('SOmething bad happend')
    }
  }
  return (
    <Layout>
      <div className="bg-gray-700 h-[400px] grid grid-cols-2">
        <div className="flex flex-col items-start mt-[12%] ml-[12%]">
          <h1 className="text-white text-[42px] font-bold">Auction Details</h1>
          <h1 className="text-white text-[22px] font-semibold">
            Home / Auction Details
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[8%]">
        <div className="flex flex-row items-start ">
          <div className="flex flex-row items-center ml-[20%] ">
            <div className="grid grid-rows-3 gap-2">
              {post?.photos?.slice(0, 2)?.map((x) => (
                <div
                  className="hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "120px",
                    height: "120px", // Set the desired height here
                    backgroundImage:
                      `url(https://firebasestorage.googleapis.com/v0/b/ceylongems-7f695.appspot.com/o/${x.photo}?alt=media)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              ))}

            </div>

            <div className="flex flex-col items-center ml-4 my-4">
              <div
                className="hover:scale-105 transition-transform duration-300"
                style={{
                  width: "300px", // Set the desired width here
                  height: "376px", // Set the desired height here
                  backgroundImage:
                  `url(https://firebasestorage.googleapis.com/v0/b/ceylongems-7f695.appspot.com/o/${Array.isArray(post?.photos)?post?.photos[0].photo: ''}?alt=media)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <h1 className="text-gray-600 text-[32px] font-bold">
            {post.name} for Sale!
          </h1>
          <h1 className="mr-[14%] text-gray-500 text-[16px] font-semibold leading-8 mt-3">
            {post.description}
          </h1>
          <div className="flex flex-row items-center justify-start mt-[2%]">
            <h1 className="text-gray-400 text-[32px] font-normal tracking-wide">
              Bidding Price :
            </h1>
            <h1 className="text-gray-600 text-[32px] font-semibold ml-2">
              {post.start_price}$
            </h1>
          </div>
          <div className="border border-neutral-200 shadow w-[400px] h-[120px] mt-[3%]">
            <div className="flex flex-row items-center justify-center">
              <h1 className="text-gray-700 text-[16px] font-semibold mt-2">
                Bid Now
              </h1>
            </div>
            <div className="grid grid-cols-3">
              <input
                placeholder="($8 Minimum)"
                type="number"
                onChange={(e)=> setPrice(parseInt(e.target.value))}
                className="border-none outline-none bg-white p-2 m-3 text-gray-700 shadow col-span-2"
              />

              <div className="cursor-pointer bg-green-600 mt-[9%] mx-[4%] border-neutral-50 rounded flex flex-row items-center justify-center h-[60%] " onClick={()=> makeBid()}>
                <h1 className="text-gray-100 text-[16px] font-semibold px-3 py-2 ">
                  {" "}
                  Place A Bid
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[5%]">
        <h1 className="text-gray-800 text-[32px] font-bold">Related Items</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-[10%] mt-[4%]">
        {sample.map((x) => (
          <AuctionCard key={x} />
        ))}
        <div className="cursor-pointer col-start-2   bg-green-600 mt-[9%] mx-[8%] border-neutral-50 rounded flex flex-row items-center justify-center h-[60%] ">
          <h1 className="text-gray-100 text-[16px] font-semibold px-3 py-2 ">
            {" "}
            Explore More
          </h1>
        </div>
      </div>
    </Layout>
  );
};
