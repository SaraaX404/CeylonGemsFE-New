import { Layout } from "@/components";
import { CreateProductRequest } from "@/models/ProductModels";
import { CreateProduct } from "@/services/ProductsService";
import { Switch } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import {toast} from 'react-toastify'

export default () => {
  const [endEnabled, setEnabled] = useState<boolean>(true);
  const [fixed, setFixed] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([])
  type mutationKey = {
    postData:CreateProductRequest,
    files:File[]
  }

  type ProductInputs = {
    name: string;
    price: number;
    end_date: Date;
    description: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductInputs>();

  const dummy =
    "https://dummyimage.com/300x300/ffffff/000000";

  const coverDummy = 'https://dummyimage.com/300x600/ffffff/000000'

  const [images, setImages] = useState<string[]>([]);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setFiles([...files, file])
      const imageUrl = URL.createObjectURL(file);
      const imageList = [...images, imageUrl];
      setImages(imageList);
    }
  };

  const postMutation = useMutation<boolean, Error, mutationKey, unknown>(CreateProduct);

  const submit  = async (data:ProductInputs) =>{

    const postData:CreateProductRequest = {
      name:data.name,
      end_date:data.end_date? data.end_date : null,
      description:data.description,
      fixed:fixed,
      photos:[],
      start_price:data.price,
    }

    const res = await postMutation.mutateAsync({postData, files})

    if(res){
      toast.success('Your post send to approvel')
    }
  }

  return (
    <Layout>
      <div className="bg-gray-700 h-[400px] grid grid-cols-2">
        <div className="flex flex-col items-start mt-[12%] ml-[12%]">
          <h1 className="text-white text-[42px] font-bold">Create Product</h1>
          <h1 className="text-white text-[22px] font-semibold">
            Home / Create Product
          </h1>
        </div>
      </div>
      <div className="image-upload relative inline-block ml-[8%]">
        <label className="block cursor-pointer w-[20%]">
          <input
            type="file"
            id="file-input"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImage(e)}
          />
          <div className="w-16 h-16  text-blue-500 rounded-full text-4xl flex items-center justify-center hover:text-blue-700">
            +
          </div>
        </label>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-row items-center ml-[20%] ">
          <div className="grid grid-rows-3 gap-2">
            <div
              className="hover:scale-105 transition-transform duration-300"
              style={{
                width: "120px",
                height: "120px", // Set the desired height here
                backgroundImage: `url(${images[0] ? images[0] : dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="hover:scale-105 transition-transform duration-300"
              style={{
                width: "120px",
                height: "120px", // Set the desired height here
                backgroundImage: `url(${images[1] ? images[1] : dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="hover:scale-105 transition-transform duration-300"
              style={{
                width: "120px",
                height: "120px", // Set the desired height here
                backgroundImage: `url(${images[2] ? images[2] : dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="flex flex-col items-center ml-4 my-4">
            <div
              className="hover:scale-105 transition-transform duration-300"
              style={{
                width: "300px", // Set the desired width here
                height: "376px", // Set the desired height here
                backgroundImage: `url(${images[3] ? images[3] : coverDummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <div className="grid grid-cols-2 gap-5 mx-[5%]">
            <h1 className="text-lg text-gray-800 col-span-2">
              Enter the details
            </h1>
            <div className="flex flex-col">
              <h1 className="text-gray-800 font-normal text-xs ">Stone Name</h1>
              <input
                placeholder="Stone Name"
                className="px-2 py-[5px] rounded text-gray-700 font-normal text-xs border focus:outline-none"
                {...register("name", {
                  required: "Name must be required",
                })}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-800 font-normal text-xs ">
                Staring Price
              </h1>
              <input
                placeholder="Start Price"
                className="px-2 py-[5px] rounded text-gray-700 font-normal text-xs border focus:outline-none"
                {...register("price", {
                  required: "Price must be required",
                })}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-800 font-normal text-xs ">End Date</h1>
              <input
                placeholder="End Date"
                type="date"
                className="px-2 py-[5px] rounded text-gray-700 font-normal text-xs border focus:outline-none"
                disabled={endEnabled}
                {...register("end_date", {
                  required: false,
                })}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <h1 className="text-gray-800 font-normal text-xs ">
                Description
              </h1>
              <textarea
                {...register("description", {
                  required: "description must be required",
                })}
                placeholder="Describe about it"
                className="px-2 py-[5px] max-w-[100%] min-w-[100%] min-h-[80%] max-h-[80%] rounded text-gray-700 font-normal text-xs border focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <h1 className="text-gray-800 font-normal text-xs ">
                Set End Date
              </h1>
              <Switch onChange={() => setEnabled(!endEnabled)} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-800 font-normal text-xs ">Fixed</h1>
              <Switch onChange={() => setFixed(!fixed)} />
            </div>

            <button className="bg-gray-700 w-[40%] h-[180%] rounded-lg" type="submit">
              <h1 className="text-white">Create</h1>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
