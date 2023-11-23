import {
  CreateProductRequest,
  GetAllPostsResponse,
} from "@/models/ProductModels";
import API from "../API";

export const GetPosts = async (): Promise<GetAllPostsResponse[]> => {
  try {
    const res = await API.get("/posts/approved");
    if (res.data) {
      return res.data;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
};

export const GetPostsById = async(id:string | string[] | undefined):Promise<GetAllPostsResponse>=>{


  try {
    const res = await API.get(`/posts/${id}`);
    console.log(res.data)
    if (res.data) {
      return res.data;
    } else {
      return {} as GetAllPostsResponse;
    }
  } catch (error) {
    throw error;
  }
}

type mutationKey = {
  postData: CreateProductRequest;
  files: File[];
};

export const CreateProduct = async ({
  postData,
  files,
}: mutationKey): Promise<boolean> => {
  let images: string[] = [];

  try {
    for (const element of files) {
      let formData = new FormData();
      formData.append("file", element);
      let fileRes = await API.post("/photos", formData);
      if (fileRes.data) {
        images.push(fileRes.data._id);
      }
    }

    console.log(images);
    postData.photos = images

    const res = await API.post("/posts", postData);
    if (res.data) {
      return true;
    } else {
      throw new Error("Cannot create the post");
    }
  } catch (error) {
    throw error;
  }
};


export const GetPostsSeller = async():Promise<GetAllPostsResponse[]>=>{
  try {
    const res = await API.get(`/posts/MyPosts`);
    if (res.data) {
      return res.data;
    } else {
      return []
    }
  } catch (error) {
    throw error;
  }
}