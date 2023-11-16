import { Alert, Button } from "@mui/material";
import Link from "next/link";

type PropTypes = {
  message:string,
  type:'error'|'info'
}

export default ({message, type}:PropTypes) => {
  return (
    <Alert
      severity={type}
     
      action={
        type == 'error'&&<Link href={"/kyc"}>
          <Button color="inherit" size="small" className="mr-10">
            <h1 className="text-red-400 font-normal text-md">Verify Now</h1>
          </Button>
        </Link>
      }
    >
      {message}
    </Alert>
  );
};
