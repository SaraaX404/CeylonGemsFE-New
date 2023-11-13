type Photo = {
    _id: string;
    photo: string;
  }
  
type Post = {
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
    end_date:Date | null
}

export type GetAllPostsResponse = Post 

export type CreateProductRequest = Omit<Omit<Omit<Post,'seller_id'>,'status'>,'_id'>