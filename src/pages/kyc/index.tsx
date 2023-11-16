import { Layout } from "@/components";
import { kycVerify } from "@/services/AuthService";
import { Button } from "@mui/material";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default () => {
  const [imageDataURL, setImageDataURL] = useState<string | null>(null);
  const [imageDataURL2, setImageDataURL2] = useState<string | null>(null);
  const [imageDataURL3, setImageDataURL3] = useState<string | null>(null);

  const [file, setFile] = useState<File[]>([]);

  const dummy = "https://dummyimage.com/600x400/ffffff/000000";

  const dummyCover = "https://dummyimage.com/700x600/ffffff/000000";

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const fileInputRef2 = useRef<HTMLInputElement | null>(null);
  const fileInputRef3 = useRef<HTMLInputElement | null>(null);

  const kycMutation = useMutation<boolean, Error, File[], unknown>(kycVerify);

  const handleClick = () => {
    // Trigger the click event on the file input when the div is clicked
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleClick2 = () => {
    // Trigger the click event on the file input when the div is clicked
    if (fileInputRef2.current) {
      fileInputRef2.current.click();
    }
  };

  const handleClick3 = () => {
    // Trigger the click event on the file input when the div is clicked
    if (fileInputRef3.current) {
      fileInputRef3.current.click();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file here
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile([...file, selectedFile]);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the data URL to the state
        setImageDataURL(reader.result as string);
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFileChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file here
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile([...file, selectedFile]);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the data URL to the state
        setImageDataURL2(reader.result as string);
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleFileChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    // Handle the selected file here
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile([...file, selectedFile]);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the data URL to the state
        setImageDataURL3(reader.result as string);
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Layout isProfile>
      <div className="grid grid-cols-2">
        <div className="p-3">
          <h1 className="text-gray-700 text-lg font-semibold mx-8">
            Secure Your Presence: KYC Verification for a Trustworthy Community
          </h1>
          <p className="text-justify text-gray-600 font-normal mx-8 my-4">
            KYC Verification: Your Security, Our Priority. To ensure a safe and
            trustworthy environment, we require Know Your Customer (KYC)
            verification. Please follow the simple steps below to complete the
            process and enjoy a secure experience on Ceylon Gems.
          </p>
          <h1 className="text-gray-700 font-semibold mx-8">
            1)Provide your accurate personal information.
          </h1>
          <h1 className="text-gray-700 font-semibold mx-8">
            2)Upload a clear photo of yourself.
          </h1>
          <h1 className="text-gray-700 font-semibold mx-8">
            3)Submit a valid government-issued ID for identity verification.
          </h1>
          <p className="text-justify text-gray-600 font-normal mx-8 my-4">
            Remember, adding your real photo and identity is crucial. Any
            attempt to use false information or steal someone's identity is a
            criminal offense. Thank you for your cooperation in fostering a
            secure community on Ceylon Gems.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="grid grid-cols-1">
            <div
              className="hover:scale-105 transition-transform duration-300 m-2"
              style={{
                width: "350px",
                height: "305px", // Set the desired height here
                backgroundImage: `url(${imageDataURL || dummyCover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={handleClick}
            ></div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div className="flex flex-col">
            <div
              className="hover:scale-105 transition-transform duration-300 m-1"
              onClick={handleClick2}
              style={{
                width: "280px",
                height: "150px", // Set the desired height here
                backgroundImage: `url(${imageDataURL2 || dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <input
              type="file"
              ref={fileInputRef2}
              style={{ display: "none" }}
              onChange={handleFileChange2}
            />
            <div
              className="hover:scale-105 transition-transform duration-300 m-1"
              onClick={handleClick3}
              style={{
                width: "280px",
                height: "150px", // Set the desired height here
                backgroundImage: `url(${imageDataURL3 || dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <input
              type="file"
              ref={fileInputRef3}
              style={{ display: "none" }}
              onChange={handleFileChange3}
            />
          </div>
        </div>
        <div></div>
        <Button variant="outlined" onClick={async ()=>{
          const res =await kycMutation.mutateAsync(file)
          if(res){
            toast.success('We will check and get back to you')
            window.location.href = '/'
          }
        }}>Submit</Button>
      </div>
    </Layout>
  );
};
