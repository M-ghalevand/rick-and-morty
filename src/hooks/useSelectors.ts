import { useAppSelector } from "../store/ConfigureStore";
import {
  select_general_info,
  select_general_info_loading,
  selected_page,
  select_search_box,
  selectedMode,
  select_status,
  select_specie,
  select_gender,
  select_info,
  select_character_loading,
} from "../store/slice/AppSlice";

const useSelectors = () => {
  //  themeMode It is a string that is dark or light to change the themeMode
  const themeMode = useAppSelector(selectedMode);
  // selectGeneralInfo There is an object that contains the number of pages and the number of characters
  const selectGeneralInfo = useAppSelector(select_general_info);
  // selectGeneralInfoLoading There is a boolean that gets information The related to api is GENERAL_INFO from the server when it wants
  const selectGeneralInfoLoading = useAppSelector(select_general_info_loading);
  // selectedPage Returns the searched text
  const selectSearchBox = useAppSelector(select_search_box);
  // selectedPage Returns the selected page
  const selectedPage = useAppSelector(selected_page);
  // selectStatus Returns the status of the character
  const selectStatus = useAppSelector(select_status);
  // selectSpecie Returns the specie of the character
  const selectSpecie = useAppSelector(select_specie);
  // selectGender Returns the gender of the character
  const selectGender = useAppSelector(select_gender);
  // selectInfo  is an object that takes the total number of characters and pages from the server
  const selectInfo = useAppSelector(select_info);
  // selectCharacterLoading There is a boolean that gets  Information related to api CHARACTERS from the server when it wants
  const selectCharacterLoading = useAppSelector(select_character_loading);

  return {
    themeMode,
    selectGeneralInfo,
    selectGeneralInfoLoading,
    selectSearchBox,
    selectedPage,
    selectStatus,
    selectSpecie,
    selectGender,
    selectInfo,
    selectCharacterLoading,
  };
};

export default useSelectors;
