import { CreateBidRequest, GetBidsResponse } from "@/models/BidsModel";
import API from "../API";

export const CreateBid = async (data: CreateBidRequest): Promise<boolean> => {
  try {
    await API.post("/bids", data);
    return true;
  } catch (e) {
    return false;
  }
};

export const getBidsBySeller = async (): Promise<GetBidsResponse[]> => {
  try {
    const res = await API.get(`/bids/buyer`);
    return res.data;
  } catch (e) {
    throw e;
  }
};

export const getBidsByPost = async (id: string | string[] | undefined): Promise<GetBidsResponse[]> => {
  console.log(id, 'id')
  try {
    const res = await API.get(`/bids/post/${id}`);
    return res.data;
  } catch (e) {
    throw e;
  }
};
