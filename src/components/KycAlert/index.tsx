import { Alert, Button } from "@mui/material";
import Link from "next/link";

export default () => {
  return (
    <Alert
      severity="error"
      action={
        <Link href={"/kyc"}>
          <Button color="inherit" size="small" className="mr-10">
            <h1 className="text-red-400 font-normal text-md">Verify Now</h1>
          </Button>
        </Link>
      }
    >
      Verify your identity and start buisness
    </Alert>
  );
};
