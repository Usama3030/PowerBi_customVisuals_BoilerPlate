import { useState } from "react";

let updateCallback: (newState: any[]) => void = null;

export const update = (newState: any[]) => {
  if (typeof updateCallback === "function") {
    updateCallback(newState);
  }
};
const useApp = () => {
  const [state, setState] = useState(null);
  updateCallback = (newState: any[]) => {
    setState(newState);
  };
  return { state };
};

export default useApp;
