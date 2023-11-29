import { Input } from "@mui/material";
import Item from "./Item.component";
import ChatBody from "./chat.component";
import { useEffect, useState } from "react";
import firebase from "../../firebase";
import { useUserContext } from "@/context";

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
  const [receiverID, setReceiverID] = useState<User>({} as User)

  interface ChatMessage {
    value: {
      message: string;
      receiver: string;
      sender: string;
    };
  }

  const fetchData = async() => { 
    const response = await fetch(
      `http://localhost:3000/users/${id}`
    );

    const data = await response?.json();

    setReceiverName([...receiverName, {id:id || '', name:data.name}])
    
  }

  useEffect(()=>{
    fetchData()
  },[id])
  useEffect(() => {
    // Fetch data from Firebase
    const databaseRef = firebase.database().ref(`/chat/${UserCTX.user?._id}`); // Replace with your database path
    databaseRef.on("value", (snapshot) => {
      console.log(`/chat/${UserCTX.user?._id}`)
      const dataSnapshot = snapshot.val();
      console.log('de', dataSnapshot)
      const dataArray: ChatMessage[] = dataSnapshot
        ? Object.values(dataSnapshot)
        : [];
      console.log(dataArray, 'da')
      dataArray.map(async(x: any) => {
       
          let u:string | null = null
          if(x.value.receiver == UserCTX.user?._id){
            u = x.value.sender
          }else{
            u = x.value.receiver
          }
          // Fetch the user name by ID
          const response = await fetch(
            `http://localhost:3000/users/${u}`
          );

          const data = await response?.json();
          const user: User = {
            id: u || '',
            name: data.name,
          };

          console.log(user, 'us')

          setReceiverName([...receiverName, user]);
      
      });
    });

    // Cleanup the event listener when the component unmounts
    return () => {
      databaseRef.off("value");
    };
  }, [UserCTX.user?._id]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-start w-[40%]">
        <Input placeholder="search" className="mx-3 my-3 px-3" />
        {receiverName.map((x)=>{
            return(
                (name || '') != x.name && <div onClick={()=>{
                 
                  setReceiverID({id:x.id, name:x.name})
                }}><Item name={x.name} /></div>
            )
    })}
      </div>
      <div className="w-[65%]  mx-[3%]">
        <ChatBody name={name} id={id}  receiverID={receiverID} setReceiverID={setReceiverID} />
      </div>
    </div>
  );
};
