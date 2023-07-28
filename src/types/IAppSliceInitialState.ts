import IGeneralInfo, { IInfo } from "./IGeneralInfo";

export default interface IAppSliceInitialState {
  themeMode: "dark" | "light";
  loading: boolean;
  searchBox: string;
  page: number;
  status: string;
  specie: string;
  gender: string;
  info: IInfo;
  GeneralInfo: IGeneralInfo;
}
