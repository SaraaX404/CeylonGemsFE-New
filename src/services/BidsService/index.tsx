import {  CreateBidRequest } from "@/models/BidsModel";
import API from "../API";

export const CreateBid = async (data:CreateBidRequest): Promise<boolean> => {
    
    try{

        await API.post('/bids',data)
        return true

    }catch(e){
        return false
    }
    
};