import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Context } from "../ContextApi/Context";
import useApp from "./useApp";
import { appRequired, appState } from "../Types/Type";

const data = (state: appState) => {
  const getState: appRequired[] = [];

  if (state) {
    //   const email = state[0].categorical.categories[0].values;
    //   const id = state[0].categorical.categories[1].values;
    //   const job = state[0].categorical.categories[2].values;
    //   const name = state[0].categorical.categories[3].values;
    //   const password = state[0].categorical.categories[4].values;

    //   for (let i = 0; i < email.length; i++) {
    //     const storeValue: appRequired = {
    //       email: email[i].toString(),
    //       id: id[i].toString(),
    //       job: job[i].toString(),
    //       name: name[i].toString(),
    //       password: password[i].toString(),
    //     };

    //     getState.push(storeValue);
    //   }

    // outer loop for rows and inner loop for columns
    const path = state[0].categorical.categories;
    for (let i = 0; i < path[0].values.length; i++) {
      const firstVariable = {};
      for (let j = 0; j < path.length; j++) {
        const name1: string = path[j].source.displayName.toString();
        // console.log(name1);
        const value1: string = path[j].values[i].toString();
        // console.log(value1);
        firstVariable[name1] = value1;
      }
      // console.log(firstVariable);
      // debugger;
      getState.push(firstVariable);
      // getState = [...getState, firstVariable];
    }
  }

  return getState;
};

const App = () => {
  const [page, setPage] = useState(<SignIn />);
  const { state } = useApp();
  // console.log(state);
  const getState: appRequired[] = data(state);
  // console.log(getState);

  return (
    <Context.Provider value={{ page, setPage, state, getState }}>
      {page}
    </Context.Provider>
  );
};

export default App;
