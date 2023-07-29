import { FC, useEffect } from "react";
import { useAppDispatch } from "./store/ConfigureStore";
import { fetchCharacters, fetchGeneralInfo } from "./store/slice/AppSlice";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import useSelectors from "./hooks/useSelectors";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const {
    selectedPage,
    selectedStatus,
    selectedGender,
    selectedSpecies,
    selectSearchBox,
  } = useSelectors();

  //fetching characters based on one of the following factors or more specified by the user: selectedPage, status, gender, species
  useEffect(() => {
    const promise = dispatch(
      fetchCharacters({
        page: selectedPage,
        status: selectedStatus,
        gender: selectedGender,
        species: selectedSpecies,
        name: selectSearchBox,
      })
    );
    return () => {
      promise.abort();
    };
  }, [
    dispatch,
    selectedPage,
    selectedStatus,
    selectedGender,
    selectedSpecies,
    selectSearchBox,
  ]);

  //fetching general info in first render
  useEffect(() => {
    const promise = dispatch(fetchGeneralInfo());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default App;
