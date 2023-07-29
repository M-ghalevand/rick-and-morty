import { useAppSelector } from "../store/ConfigureStore";
import {
  select_general_info,
  general_info_loading,
  selected_page,
  select_search_box,
  selectedThemeMode,
  selected_status,
  selected_species,
  selected_gender,
  selected_info,
  select_character_loading,
} from "../store/slice/AppSlice";

const useSelectors = () => {
  //  themeMode: dark | light (theme of the app)
  const themeMode = useAppSelector(selectedThemeMode);
  // selectGeneralInfo: total counts and number of pages of characters, locations and episodes.
  const selectGeneralInfo = useAppSelector(select_general_info);
  // generalInfoLoading: status of the request for fetching general info
  const generalInfoLoading = useAppSelector(general_info_loading);
  // selectedPage: search box content
  const selectSearchBox = useAppSelector(select_search_box);
  // selectedPage: selected page by user
  const selectedPage = useAppSelector(selected_page);
  // selectedStatus: selected status of the character for filtering (Alive | Dead | Unknown)
  const selectedStatus = useAppSelector(selected_status);
  // selectedSpecies: selected species of the character for filtering
  const selectedSpecies = useAppSelector(selected_species);
  // selectedGender: selected gender of the character for filtering
  const selectedGender = useAppSelector(selected_gender);
  // filteredInfo: total counts and number of pages of filtered/noneFiltered characters
  const filteredInfo = useAppSelector(selected_info);
  // characterLoading:status of the request for fetching characters info
  const characterLoading = useAppSelector(select_character_loading);

  return {
    themeMode,
    selectGeneralInfo,
    generalInfoLoading,
    selectSearchBox,
    selectedPage,
    selectedStatus,
    selectedSpecies,
    selectedGender,
    filteredInfo,
    characterLoading,
  };
};

export default useSelectors;
