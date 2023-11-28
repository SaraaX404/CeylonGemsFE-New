import { Input } from "@mui/material";
import Item from "./Item.component";
import ChatBody from "./chat.component";
import { useEffect, useState } from "react";
import firebase from "../../firebase";
import { useUserContext } from "@/context";
import axios from "axios";

type PropTypes = {
  name?: string;
  id?: string;
};

export default ({ name, id }: PropTypes) => {
  type User = {
    name: string;
    id: string;
  };

  const UserCTX = useUserContext();
  const [receiverName, setReceiverName] = useState<User[]>([]);

  interface ChatMessage {
    value: {
      message: string;
      receiver: string;
      sender: string;
    };
  }
  useEffect(() => {
    // Fetch data from Firebase
    const databaseRef = firebase.database().ref(`/chat/${UserCTX.user?._id}`); // Replace with your database path
    databaseRef.on("value", (snapshot) => {
      const dataSnapshot = snapshot.val();
      const dataArray: ChatMessage[] = dataSnapshot
        ? Object.values(dataSnapshot)
        : [];
      dataArray.map((x: any) => {
        Object.keys(x).map(async (y: any) => {
          // Fetch the user name by ID
          const response = await fetch(
            `http://localhost:3000/users/${x[y].value.receiver}`
          );
          const data = await response.json();
          const user: User = {
            id: x[y].value.receiver,
            name: data.name,
          }; // Adjust this based on your actual API response

          setReceiverName([...receiverName, user]);
        });
      });
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      databaseRef.off("value");
    };
  }, []);


  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-start w-[40%]">
        <Input placeholder="search" className="mx-3 my-3 px-3" />
        {name && <Item name={name} />}
        {receiverName.map((x)=>{
            return(
                (name || '') != x.name && <Item name={x.name} />
            )
            
})}
      </div>
      <div className="w-[65%]  mx-[3%]">
        <ChatBody name={name} id={id} />
      </div>
    </div>
  );
};
