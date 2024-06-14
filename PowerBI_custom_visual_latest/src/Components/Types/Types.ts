import powerbi from "powerbi-visuals-api";
export type appState = powerbi.DataView[];

export type appRequired = {
  id?: string;
  name?: string;
  email?: string;
  salary?: number;
};
