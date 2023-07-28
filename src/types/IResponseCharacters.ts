import ICharacterInfo from "./ICharacterInfo";
import ICharacterResult from "./ICharacterResult";

export default interface IResponseCharacters {
  characters: {
    info: ICharacterInfo;
    results: ICharacterResult[];
  };
}
