import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { appState } from "../Types/Types";

export type contextType = {
  page: ReactNode; //for routing
  setPage: Dispatch<SetStateAction<ReactNode>>; //for routing
  state: appState;
};

export const Context = createContext<contextType | null>(null);
