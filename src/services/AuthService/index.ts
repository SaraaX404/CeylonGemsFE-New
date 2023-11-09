import { LoginRequest } from "@/models";
import API from "../API";

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