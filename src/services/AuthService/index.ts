import { GetUserDetailsResponse, LoginRequest } from "@/models";
import API from "../API";
import { User } from "@/context/AuthContext/types";

export const login = async(data:LoginRequest) =>{
    try{
        const res = await API.post('/users/login', data)
        if(res.data.token){
            localStorage.setItem('token', res.data.token)
            return true
        }else{
            throw new Error("Something bad happened")
        }
    }catch(e:any){
        throw new Error(e.message)
    }
}

export const checkUser = async():Promise<User> =>{
    try{
        const res = await API.get('/')
        if(res.data._id){
            return{
                username:res.data.name,
                email:res.data.email,
                kyc:res.data.kyc.verified ? 'VERIFIED':res.data.kyc.data.length>2 ? 'INREVIEW' : 'UNVERIFIED'
            }
        }else{
           throw new Error('Unauthorized')
        }
        
    }catch(e:any){
        throw new Error(e.message)
    }
}

export const kycVerify = async(data:File[]):Promise<boolean> =>{

    let images: string[] = [];

  try {
    for (const element of data) {
      let formData = new FormData();
      formData.append("file", element);
      let fileRes = await API.post("/photos", formData);
      if (fileRes.data) {
        images.push(fileRes.data._id);
      }
    }
    const res = await API.put("/users/update", {data:images});
    if (res.data) {
      return true;
    } else {
      throw new Error("Cannot upload the images");
    }
  } catch (error) {
    throw error;
  }

}

export const GetProfile = async():Promise<GetUserDetailsResponse>=>{
  try{
    const res = await API.get('/users/me');
    if(res.data){
      return res.data
    }else{
    throw new Error('No user found')
    }
  }catch(e){
    throw e
  }
}

