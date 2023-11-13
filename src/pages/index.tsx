import { SlPeople } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { CiFaceSmile } from "react-icons/ci";
import { BiCommentDetail } from "react-icons/bi";
import { Layout, AuctionCard } from "@/components";
import { BsFillSendCheckFill } from "react-icons/bs";
import Protected from "@/components/Protected";
import { GetPosts } from "@/services/ProductsService";
import { useEffect, useState } from "react";
import { GetAllPostsResponse } from "@/models/ProductModels";
import { useQuery } from "react-query";
import Link from "next/link";

const sample = [1, 2, 3, 4, 5, 6];

export default function Home() {
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
    <Protected>
      <Layout>
        <div
          className=" bg-cover bg-center min-h-screen bg-gray-800"
          style={{
            backgroundImage:
              'url("https://i.postimg.cc/XYx8qC97/Main-Banner.png")',
          }}
        >
          <div className="flex flex-col items-center justify-center mx-[20%] ">
            <h1 className="text-[24px] font-semibold text-white mt-[15%]">
              Welcome to Ceylon Gems
            </h1>
            <h1 className="font-bold text-[48px] text-white text-center mt-[3%]">
              Explore, Bid, Win - Your Gateway to Extraordinary Gemstones
            </h1>

            <h1 className="font-normal text-white text-[14px] text-center leading-7 mt-[3%] ">
              Discover a dazzling world of exquisite gemstones, where beauty
              meets rarity and dreams come to life. GemMarket is your exclusive
              platform for bidding on and acquiring the most coveted gems from
              around the globe. Whether you're a passionate collector, a jewelry
              enthusiast, or an investor seeking timeless treasures, GemMarket
              is where your journey begins.
              <div className="bg-white border rounded-lg w-[20%] ml-[40%] mt-[10%]">
                <h1 className="text-gray-900 text-[18px] font-bold py-2 cursor-pointer">
                  Explore
                </h1>
              </div>
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[5%]">
          <h1 className="text-gray-800 text-[32px] font-bold">Live Auction</h1>
          <h1 className="text-gray-700 text-[16px] font-semibold mx-[20%] text-center leading-8">
            Discover a world of unparalleled opportunities on the premier global
            bidding marketplace featuring our exquisite range of bidding
            products. Join us in sculpting smiles, achieving success, and
            nurturing future growth together. Just like a brushstroke on a
            canvas, let us paint a brighter future through Ceylon Gems.
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-5 mx-[10%] mt-[4%]">
        {posts.map((x) => (
          <Link href={`/details/${x._id}`}>
            <AuctionCard name={x.name} photo={x.photos[0].photo  } price={x.start_price} />
          </Link>
        ))}
        </div>
      </Layout>
    </Protected>
  );
}
