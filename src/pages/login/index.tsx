import {Layout} from "@/components";
import Link from "next/link";

export default ()=>{
    return(
       <Layout isProfile={true}>
           <div className={'grid grid-cols-2 gap-2'}>
               <div className={'flex flex-col'}>
                   <h1 className={'text-gray-600 mx-10 text-xl font-semibold'}>Welcome Back</h1>
                   <div className="flex flex-col gap-1 col-span-2 mx-10 mt-10">
                       <h1 className="text-gray-800 text-[16px] font-semibold ">
                           Email
                       </h1>
                       <div className="flex flex-col rounded shadow border border-gray-200">
                           <input
                               placeholder="someone@example.com"
                               className="w-[100%] px-2 py-3  focus:outline-blue-600 focus:ring-1 focus:ring-green-500"
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
               </div>
               <div ><img className={'border rounded-xl'} src={'https://th.bing.com/th/id/OIP.pGYhDY7tgh0oa3r-qrxbcAHaFj?pid=ImgDet&rs=1'}/></div>
           </div>
       </Layout>
    )
}