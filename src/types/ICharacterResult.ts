import IEpisode from "./IEpisode";
import ILocation from "./ILocation";

export default interface ICharacterResult {
  created: string;
  episode: IEpisode[];
  gender: string;
  id: string;
  image: string;
  location: ILocation;
  name: string;
  status: string;
}
