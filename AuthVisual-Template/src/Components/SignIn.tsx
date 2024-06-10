import { useContext, useState } from "react";
import { Context } from "../ContextApi/Context";
import SignUp from "./SignUp";
import { userAuth } from "../Types/Type";
import Home from "./Home";

const SignIn: React.FC = () => {
  console.log("Signin Working!");

  const RecievedData = useContext(Context);
  // console.log(RecievedData);
  if (!RecievedData) return null;
  const { page, setPage, getState } = RecievedData; //destructuring
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const handleSubmit = () => {
    console.log(name, email, password);
    const user: userAuth | null = getState?.find(
      (data) => data.email === email && data.password === password
    );
    if (user) {
      console.log("Success");
      setPage(<Home />);
    } else {
      console.log("Failed");
    }
  };

  return (
    <>
      <button onClick={() => setPage(<SignUp />)}>SignUp</button>
      <input
        type="text"
        name="name"
        placeholder="e.g: elon musk"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="e.g: elonmusk@mars.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="...."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
export default SignIn;
