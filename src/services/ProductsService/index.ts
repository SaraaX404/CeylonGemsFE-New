import { CreateProductRequest, GetAllPostsResponse } from "@/models/ProductModels";
import API from "../API";

export const GetPosts = async (): Promise<GetAllPostsResponse[]> => {
  try {
    const res = await API.get("/posts");
    if (res.data) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};


export const CreateProduct = async (data:CreateProductRequest): Promise<boolean> =>{
    try{
        const res = await API.post('/posts', data)
        if(res.data){
            return true
        }else{
            throw new Error('Cannot create the post')
        }

    }catch(error){
        throw error
    }
}