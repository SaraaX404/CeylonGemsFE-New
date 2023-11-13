import { Layout } from "@/components";
import { Button } from "@mui/material";

export default () => {
  const dummy =
    "https://fernandostexmex.com/wp-content/uploads/2014/12/dummy_image_06-500x300.png";
  return (
    <Layout isProfile>
      <div className="grid grid-cols-2">
       
        <div className="p-3">
        <h1 className="text-gray-700 text-lg font-semibold mx-8">Secure Your Presence: KYC Verification for a Trustworthy Community</h1>
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
                backgroundImage: `url(${dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="flex flex-col">
            <div
              className="hover:scale-105 transition-transform duration-300 m-1"
              style={{
                width: "280px",
                height: "150px", // Set the desired height here
                backgroundImage: `url(${dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
             <div
              className="hover:scale-105 transition-transform duration-300 m-1"
              style={{
                width: "280px",
                height: "150px", // Set the desired height here
                backgroundImage: `url(${dummy})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
       <div></div>
       <Button variant="outlined">Submit</Button>
      </div>
    </Layout>
  );
};
