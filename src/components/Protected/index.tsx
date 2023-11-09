import { User } from "@/context/AuthContext/types";
import { checkUser } from "@/services/AuthService";
import { useQuery } from "react-query";
import {useEffect} from 'react'
import { useUserContext } from "@/context";

type PropTypes = {
    children:React.ReactNode
}

export default (props:PropTypes)=>{

    const UserCTX = useUserContext()

    const { data,error } = useQuery<User, Error>(
        "campaigns",
        () => checkUser()
      );

    useEffect(()=>{
        if(data){
            UserCTX.login(data)
        }
    },[data,error])
     
    return<div>
        {props.children}
    </div>
}