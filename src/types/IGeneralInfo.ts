export interface IInfo {
  count: number;
  pages: number;
}
export default interface IGeneralInfo {
  loading?: boolean;
  characters: { info: IInfo };
  locations: { info: IInfo };
  episodes: { info: IInfo };
}
