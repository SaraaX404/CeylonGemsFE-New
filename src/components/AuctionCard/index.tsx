import { BsShare } from "react-icons/bs"


type PropTypes = {
  isProfile?: boolean,
  name?:string,
  photo?:string,
  price?:number
}

export default (props:PropTypes) => {
    console.log(props)
    return(<div className="flex flex-col justify-start shadow border rounded cursor-pointer">
        <div className=" overflow-hidden">
        <div
          className="hover:scale-105 transition-transform duration-300"
          style={{
            width: '100%',
            height: '200px', // Set the desired height here
            backgroundImage:
              `url(https://firebasestorage.googleapis.com/v0/b/ceylongems-7f695.appspot.com/o/${props.photo}?alt=media)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
      <div>
        <div className="m-3">
            <h1 className="text-gray-700 text-[24px] font-bold">{props.name} {props.isProfile?"":"for Sale"}</h1>
            <div className="flex flex-row items-center mt-[3%]">
              {props.isProfile? <><h1 className="text-gray-500 text-[16px] font-normal">Total Bids:</h1><h1 className="text-gray-700 text-[16px] font-semibold">20</h1></>: <><h1 className="text-gray-500 text-[16px] font-normal">Bidding Price:</h1><h1 className="text-gray-700 text-[16px] font-semibold">${props.price}</h1></>}
               
            </div>
            <div className="flex flex-row justify-between items-center mt-[3%]">
                <div className="bg-green-600 border-neutral-50 rounded"><h1 className="text-gray-100 text-[16px] font-semibold px-3 py-2 "> {props.isProfile?"Close":"Place A"}  Bid</h1></div>
                <BsShare/>
            </div>
            
        </div>
      </div>

        
        


    </div>)
}