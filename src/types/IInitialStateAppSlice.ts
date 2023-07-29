import IGeneralInfo, { IInfo } from "./IGeneralInfo";

export default interface IInitialStateAppSlice {
  themeMode: "dark" | "light";
  loading: boolean;
  searchBox: string;
  page: number;
  status: string;
  species: string;
  gender: string;
  info: IInfo;
  GeneralInfo: IGeneralInfo;
}
