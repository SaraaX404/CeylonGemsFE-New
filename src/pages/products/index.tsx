import { AuctionCard, Layout } from "@/components";
import { GetAllPostsResponse } from "@/models/ProductModels";
import { GetPosts } from "@/services/ProductsService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default () => {
  const [posts, setPosts] = useState<GetAllPostsResponse[]>([]);
  const { data, error } = useQuery<GetAllPostsResponse[], Error>("posts", () =>
    GetPosts()
  );

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return (
    <Layout>
      <div className="bg-gray-700 h-[400px] grid grid-cols-2">
        <div className="flex flex-col items-start mt-[12%] ml-[12%]">
          <h1 className="text-white text-[42px] font-bold">Live Auction</h1>
          <h1 className="text-white text-[22px] font-semibold">
            Home / Live Auction
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mx-[10%] mt-[8%]">
        {posts.map((x) => (
          <Link href={`/details/${x._id}`}>
            <AuctionCard name={x.name} photo={x.photos[0].photo  } price={x.start_price} />
          </Link>
        ))}
      </div>
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
    </Layout>
  );
};
