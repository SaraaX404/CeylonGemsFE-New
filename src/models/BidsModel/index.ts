import { GetUserDetailsResponse } from ".."
import { Post } from "../ProductModels"



export type Bids = {
    status:'ACCEPTED' | 'REJECTED' | 'PENDING',
    buyerID?: GetUserDetailsResponse,
    postID: string,
    price: number
}

export type GetBidsResponse = Omit<Bids, 'postID'> & {
    postID:Post,
    _id:string
}

export type CreateBidRequest = Omit<Omit<Bids, 'status'>,'buyerId'>