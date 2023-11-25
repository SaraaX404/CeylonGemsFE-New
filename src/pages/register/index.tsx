import { Layout } from "@/components";
import { RegisterUserRequest } from "@/models";
import { registerUser } from "@/services/AuthService";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {toast} from 'react-toastify'

export default () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<RegisterUserRequest>();

      const loginMutation = useMutation<boolean, Error, RegisterUserRequest, unknown>(registerUser);

      const submit = async(data:RegisterUserRequest) =>{
         
         try{
            const res = await loginMutation.mutateAsync(data)
            if(res){
                toast.success(`Welcome ${data.first_name} ${data.last_name}`)
                window.location.href = '/'
               }
         }catch(error){
            toast.error('Invalid Credentials')
         }
         
      }

  return (
    <Layout isProfile={true}>
      <div
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/B6WFnrRs/Register-Banner.png")',
        }}
      >
        <div className={"mx-[20%]"}>
          <div className={"flex flex-row items-center justify-start"}>
            <label
              htmlFor="doc"
              className="flex m-[5%] items-center p-4 rounded-full border border-gray-300 border-dashed bg-gray-50 cursor-pointer h-[120px] w-[120px]"
              style={{
                backgroundImage:
                  'url("https://dummyimage.com/300x300/ffffff/000000")',
                backgroundSize: "cover", // This ensures the image covers the entire div
                backgroundPosition: "center",
              }}
            >
              <input type="file" id="doc" name="doc" accept="png, jpg" hidden />
            </label>
          </div>
          <div className="grid grid-cols-2 w-[90%] mx-[5%] gap-5 mb-[5%]">
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">
                First Name*
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="Your First Name"
                  {...register('first_name', {required:'First name is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">
                Last Name*
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="Your Last Name"
                  {...register('last_name', {required:'Last name is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">
                Contact Number*
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="0784455785"
                  {...register('mobile', {required:'Mobile number is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">Email*</h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="Your Email"
                  {...register('email', {required:'Email is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <h1 className="text-gray-800 text-[16px] font-normal ">
                Address Line 1*
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="No 01, Apartment 06"
                  {...register('address_01', {required:'Address is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <h1 className="text-gray-800 text-[16px] font-normal">
                Address Line 2
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="albuquerque"
                  {...register('address_02', {required:false})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">
                Country*
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="USA"
                  {...register('country', {required:'Country is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">State*</h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="New York"
                  {...register('state', {required:'State is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">City*</h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="New Mexico"
                  {...register('city', {required:'City is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-gray-800 text-[16px] font-normal">
                Zip Code*
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                  placeholder="70200"
                  {...register('zip_code', {required:'Zip code is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 col-span-2">
              <h1 className="text-gray-800 text-[16px] font-normal ">
                NIC
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                type="text"
                  {...register('nic', {required:'NIC number is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <h1 className="text-gray-800 text-[16px] font-normal ">
                Password
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                type="password"
                  {...register('password', {required:'Password is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 col-span-2">
              <h1 className="text-gray-800 text-[16px] font-normal ">
                Confirm Password
              </h1>
              <div className="flex flex-col rounded shadow border border-gray-200">
                <input
                type="password"
                  {...register('password', {required:'Password is required'})}
                  className="w-[100%] px-2 py-3  focus:outline-green-500 focus:ring-1 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
          <button
            className={
              "w-[88%] border border-blue-500 hover:border-white shadow-2xl rounded-md bg-white transition duration-300 hover:bg-blue-500 mx-10 mr-auto mt-3 group"
            }
            onClick={handleSubmit(submit)}
          >
            <h1
              className={
                "text-blue-500 my-3 group-hover:text-white font-semibold"
              }
            >
              Register
            </h1>
          </button>
          <div
            className={"flex flex-row items-center justify-start mx-10 mt-4"}
          >
            <h1 className={"text-gray-700 font-semibold text-[14]"}>
              Already have an Account??
            </h1>
            <Link
              href={"/login"}
              className={"text-blue-500 font-bold text-[16px] ml-3"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
