import { useState } from "react";
import useApp from "./Hooks/useApp";
import { Context } from "./Context/Context";
import User1 from "./Views/UserCard";
import "../../style/style.css";
const App = () => {
  console.log("App.tsx");
  const [page, setPage] = useState(<User1 />);
  const { state } = useApp();
  console.log("app state", state);

  if (!state) return null;

  return (
    <Context.Provider value={{ page, setPage, state }}>
      <div className="app-container">{page}</div>
    </Context.Provider>
  );
};

export default App;
