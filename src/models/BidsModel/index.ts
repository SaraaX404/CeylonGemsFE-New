export type Bids = {
    status:'ACCEPTED' | 'REJECTED' | 'PENDING',
    buyerId: string,
    postID: string,
    price: number
}

export type CreateBidRequest = Omit<Omit<Bids, 'status'>,'buyerId'>