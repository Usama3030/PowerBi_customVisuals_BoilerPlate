import { useContext, useState } from "react";
import { Context } from "../ContextApi/Context";
import SignIn from "./SignIn";
import Routing from "./Routing";

const SignUp = () => {
  const RecievedData = useContext(Context);

  if (!RecievedData) return null;
  const { page, setPage } = RecievedData;
  console.log("Sign Up");
  return (
    <>
      <Routing />
      <button onClick={() => setPage(<SignIn />)}>SignIn</button>
    </>
  );
};

export default SignUp;
