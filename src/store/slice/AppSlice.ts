import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import type IGeneralInfo from "../../types/IGeneralInfo";
import type IInitialStateAppSlice from "../../types/IInitialStateAppSlice";
import type ICharacterResult from "../../types/ICharacterResult";
import type IParamsToFetchCharacters from "../../types/IParamsToFetchCharacters";
import type IResponseCharacters from "../../types/IResponseCharacters";
import { RootState } from "../ConfigureStore";
import { apolloClient } from "../../graphql/apolloClient";
import CHARACTERS from "../../graphql/CHARACTERS";
import GENERAL_INFO from "../../graphql/GENERAL_INFO";

//  fetchCharacters takes some parameters selected by the user and returns related list of characters.
export const fetchCharacters = createAsyncThunk<
  IResponseCharacters,
  IParamsToFetchCharacters
>("AsyncThunk/Characters", async ({ page, status, species, gender, name }) => {
  const { data } = await apolloClient.query({
    query: CHARACTERS({ page, status, species, gender, name }),
  });

  return data;
});
// fetchGeneralInfo: returns total counts of characters, episodes and locations.
export const fetchGeneralInfo = createAsyncThunk<IGeneralInfo>(
  "AsyncThunk/GeneralInfo",
  async () => {
    const { data } = await apolloClient.query({
      query: GENERAL_INFO,
    });

    return {
      characters: data.characters,
      episodes: data.episodes,
      locations: data.locations,
    };
  }
);

//  sortComparer: Sorts according to id
const adapter = createEntityAdapter<ICharacterResult>({
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});
export const { selectEntities, selectById } = adapter.getSelectors(
  (state: RootState) => state.AppSlice
);
const Mode = typeof window !== "undefined" && localStorage.getItem("Mode");
const initialState = adapter.getInitialState<IInitialStateAppSlice>({
  themeMode: Mode === "dark" ? "dark" : "light",
  loading: true,
  searchBox: "",
  page: 1,
  status: "",
  species: "",
  gender: "",
  info: {
    count: 0,
    pages: 0,
  },
  GeneralInfo: {
    loading: true,
    characters: {
      info: {
        count: 0,
        pages: 0,
      },
    },
    episodes: {
      info: {
        count: 0,
        pages: 0,
      },
    },
    locations: {
      info: {
        count: 0,
        pages: 0,
      },
    },
  },
});

const AppSlice = createSlice({
  name: "AppSlice",
  initialState,
  reducers: {
    // set selected page to state
    setPagination(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    // set search box content to state
    setSearchBox(state, action: PayloadAction<string>) {
      state.searchBox = action.payload;
    },
    // set selected theme mode to state
    changeModeTheme(state, action: PayloadAction<"light" | "dark">) {
      state.themeMode = action.payload;
      localStorage.setItem("Mode", action.payload);
    },
    // set selected status of character to state
    setCharactersStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
      state.page = 1;
    },
    // set selected species of character to state
    setSpecie(state, action: PayloadAction<string>) {
      state.species = action.payload;
      state.page = 1;
    },
    // set selected gender of character to state
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
      state.page = 1;
    },
    // Reset related states of status, species, gender and page.
    clearAllFilters(state) {
      state.status = "";
      state.species = "";
      state.gender = "";
      state.searchBox = ""
      state.page = 1;

    },
  },
  extraReducers: (builder) => {
    //  When the request is in pending mode, loading sets to true in state
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    //  When request is fulfilled, entity sets by all characters, info sets in info state and loading sets to false.
    builder.addCase(
      fetchCharacters.fulfilled,
      (state, action: PayloadAction<IResponseCharacters>) => {
        adapter.setAll(state, action.payload.characters.results);
        state.info.count = action.payload.characters.info.count;
        state.info.pages = action.payload.characters.info.pages;
        state.loading = false;
      }
    );
    //  When the request is in pending mode, loading of GeneralInfo sets to true
    builder.addCase(fetchGeneralInfo.pending, (state) => {
      state.GeneralInfo.loading = true;
    });
    //  When the request is fulfilled, updated GeneralInfo sets to state
    builder.addCase(
      fetchGeneralInfo.fulfilled,
      (state, action: PayloadAction<IGeneralInfo>) => {
        state.GeneralInfo.loading = false;
        state.GeneralInfo.characters.info = {
          count: action.payload.characters.info.count,
          pages: action.payload.characters.info.pages,
        };
        state.GeneralInfo.episodes.info = {
          count: action.payload.episodes.info.count,
          pages: action.payload.episodes.info.pages,
        };
        state.GeneralInfo.locations.info = {
          count: action.payload.locations.info.count,
          pages: action.payload.locations.info.pages,
        };
      }
    );
  },
});

export const {
  setSearchBox,
  setPagination,
  changeModeTheme,
  setCharactersStatus,
  setSpecie,
  setGender,
  clearAllFilters,
} = AppSlice.actions;
export default AppSlice.reducer;

export const selectedThemeMode = (state: RootState) => state.AppSlice.themeMode;
export const select_general_info = (state: RootState) =>
  state.AppSlice.GeneralInfo;
export const general_info_loading = (state: RootState) =>
  state.AppSlice.GeneralInfo.loading;
export const select_character_loading = (state: RootState) =>
  state.AppSlice.loading;
export const select_search_box = (state: RootState) => state.AppSlice.searchBox;
export const selected_page = (state: RootState) => state.AppSlice.page;
export const selected_status = (state: RootState) => state.AppSlice.status;
export const selected_species = (state: RootState) => state.AppSlice.species;
export const selected_gender = (state: RootState) => state.AppSlice.gender;
export const selected_info = (state: RootState) => state.AppSlice.info;
