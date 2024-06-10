import { useContext, useState } from "react";
import { Context } from "../ContextApi/Context";
import SignIn from "./SignIn";
import Routing from "./Routing";

const Home = () => {
  const RecievedData = useContext(Context);

  if (!RecievedData) return null;
  const { page, setPage } = RecievedData;
  console.log("Home");
  return (
    <>
      <Routing />
      <button onClick={() => setPage(<SignIn />)}>SignIn</button>
    </>
  );
};

export default Home;
