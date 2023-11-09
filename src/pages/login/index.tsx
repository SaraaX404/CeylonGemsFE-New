import {Layout} from "@/components";
import { useUserContext } from "@/context";
import { LoginRequest } from "@/models";
import { login } from "@/services/AuthService";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default ()=>{

    const router = useRouter()
    const UserCTX = useUserContext()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<LoginRequest>();

      const loginMutation = useMutation<boolean, Error, LoginRequest, unknown>(login);

      const submit = async(data:LoginRequest) =>{
         const res = await loginMutation.mutateAsync(data)
         if(res){
          toast.success('Welcome Back')
          router.push('/')
         }
      }

    return(
       <Layout isProfile={true}>
           <div className={'grid grid-cols-2 gap-2'}>
               <form className={'flex flex-col'} onSubmit={handleSubmit(submit)}>
                   <h1 className={'text-gray-600 mx-10 text-xl font-semibold'}>Welcome Back</h1>
                   <div className="flex flex-col gap-1 col-span-2 mx-10 mt-10">
                       <h1 className="text-gray-800 text-[16px] font-semibold ">
                           Email
                       </h1>
                       <div className="flex flex-col rounded shadow border border-gray-200">
                           <input
                               placeholder="someone@example.com"
                               className="w-[100%] px-2 py-3  focus:outline-blue-600 focus:ring-1 focus:ring-green-500"
                               {...register("username", {
                                required: "Username must be required",
                              })}
                           />
                       </div>
                   </div>
                   <div className="flex flex-col gap-1 col-span-2 mx-10 my-3">
                       <h1 className="text-gray-800 text-[16px] font-semibold ">
                           Password
                       </h1>
                       <div className="flex flex-col rounded shadow border border-gray-200">
                           <input
                               type={'password'}
                               className="w-[100%] px-2 py-3  focus:outline-blue-500 focus:ring-1 focus:ring-green-500"
                               {...register("password", {
                                required: "Password must be required",
                              })}
                           />
                       </div>
                   </div>
                   <button className={'w-[88%] border border-blue-500 hover:border-white shadow-2xl rounded-md bg-white transition duration-300 hover:bg-blue-500 mx-10 mr-auto mt-3 group'}><h1 className={'text-blue-500 my-3 group-hover:text-white font-semibold'}>Login</h1></button>
                   <div className={'flex flex-row items-center justify-start mx-10 mt-4'}>
                       <h1 className={'text-gray-700 font-semibold text-[14]'}>Haven't you been there?</h1>
                       <Link href={'/register'} className={'text-blue-500 font-bold text-[16px] ml-3'}>
                           Register
                       </Link>
                   </div>
               </form>
               <div ><img className={'border rounded-xl'} src={'https://i.postimg.cc/C1T09P7R/Login-Banner.jpg'}/></div>
           </div>
       </Layout>
    )
}