type Photo = {
    _id: string;
    photo: string;
  }
  
export type Post = {
    _id: string;
    name: string;
    description: string;
    status: 'PENDING' | 'OPEN' | 'CLOSED';
    photos: Photo[];
    start_price: number;
    seller_id: {
      name: string;
      country: string;
    };
    fixed:boolean,
    highestPrice:number,
    end_date:Date | null
}

export type GetAllPostsResponse = Post 

export type CreateProductRequest = Omit<Omit<Omit<Omit<Post,'seller_id'>,'status'>,'_id'>,'photos'> & {
  photos:string[]
}