import { LoginRequest } from "@/models";
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
                email:res.data.email
            }
        }else{
           throw new Error('Unauthorized')
        }
        
    }catch(e:any){
        throw new Error(e.message)
    }
}