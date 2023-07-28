import {
  AsyncThunk,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import type IGeneralInfo from "../../types/IGeneralInfo";
import type IAppSliceInitialState from "../../types/IAppSliceInitialState";
import type ICharacterResult from "../../types/ICharacterResult";
import type IFetchCharacters from "../../types/IFetchCharacters";
import type IResponseCharacters from "../../types/IResponseCharacters";
import { AppDispatch, RootState } from "../ConfigureStore";
import { apolloClient } from "../../graphql/apolloClient";
import CHARACTERS from "../../graphql/CHARACTERS";
import GENERAL_INFO from "../../graphql/GENERAL_INFO";

// fetchCharacters There is a function that takes the input of an object that has a page,
// it takes a status, a species, a gender, which is included in the IResponseCharacters information response.
export const fetchCharacters: AsyncThunk<
  IResponseCharacters,
  IFetchCharacters,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
> = createAsyncThunk(
  "AsyncThunk/Characters",
  async ({ page, status, species, gender }) => {
    const { data } = await apolloClient.query({
      query: CHARACTERS({ page, status, species, gender }),
    });
    return data;
  }
);
// fetchGeneralInfo There is a function included in returning IGeneralInfo information
export const fetchGeneralInfo: AsyncThunk<
  IGeneralInfo,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
> = createAsyncThunk("AsyncThunk/GeneralInfo", async () => {
  const { data } = await apolloClient.query({
    query: GENERAL_INFO,
  });

  return {
    characters: data.characters,
    episodes: data.episodes,
    locations: data.locations,
  };
});

//  sortComparer Sorts according to id
const adapter = createEntityAdapter<ICharacterResult>({
  sortComparer: (a, b) => Number(a.id) - Number(b.id),
});
export const { selectEntities, selectById } = adapter.getSelectors(
  (state: RootState) => state.AppSlice
);
const Mode = typeof window !== "undefined" && localStorage.getItem("Mode");
const initialState = adapter.getInitialState<IAppSliceInitialState>({
  themeMode: Mode === "dark" ? "dark" : "light",
  loading: true,
  searchBox: "",
  page: 1,
  status: "",
  specie: "",
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
    // change Pagination to state
    setPagination(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    // change searchBox to state
    setSearchBox(state, action: PayloadAction<string>) {
      state.searchBox = action.payload;
    },
    // change themeMode to state
    changeModeTheme(state, action: PayloadAction<"light" | "dark">) {
      state.themeMode = action.payload;
      localStorage.setItem("Mode", action.payload);
    },
    // change status to state
    setCharactersStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    // change specie to state
    setSpecie(state, action: PayloadAction<string>) {
      state.specie = action.payload;
    },
    // change gender to state
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    // Delete status, specie, specie information from  state
    clearAll(state) {
      state.status = "";
      state.specie = "";
      state.gender = "";
    },
  },

  extraReducers: (builder) => {
    //  When it is in pending mode, loading true to state
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    //  When it is fulfilled, the adapter is setAll, loading false to state and info information is updated in state
    builder.addCase(
      fetchCharacters.fulfilled,
      (state, action: PayloadAction<IResponseCharacters>) => {
        adapter.setAll(state, action.payload.characters.results);
        state.info.count = action.payload.characters.info.count;
        state.info.pages = action.payload.characters.info.pages;
        state.loading = false;
      }
    );
    //  When it is in pending mode, GeneralInfo.loading true to state
    builder.addCase(fetchGeneralInfo.pending, (state, action) => {
      state.GeneralInfo.loading = true;
    });
    //  When it is fulfilled, GeneralInfo information is updated in state
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
  clearAll,
} = AppSlice.actions;
export default AppSlice.reducer;

export const selectedMode = (state: RootState) => state.AppSlice.themeMode;
export const select_general_info = (state: RootState) =>
  state.AppSlice.GeneralInfo;
export const select_general_info_loading = (state: RootState) =>
  state.AppSlice.GeneralInfo.loading;
export const select_character_loading = (state: RootState) =>
  state.AppSlice.loading;
export const select_search_box = (state: RootState) => state.AppSlice.searchBox;
export const selected_page = (state: RootState) => state.AppSlice.page;
export const select_status = (state: RootState) => state.AppSlice.status;
export const select_specie = (state: RootState) => state.AppSlice.specie;
export const select_gender = (state: RootState) => state.AppSlice.gender;
export const select_info = (state: RootState) => state.AppSlice.info;
