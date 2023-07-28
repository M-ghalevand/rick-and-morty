import { FC, lazy, useEffect } from "react";
import { useAppDispatch } from "./store/ConfigureStore";
import { fetchCharacters, fetchGeneralInfo } from "./store/slice/AppSlice";

const Header = lazy(() => import("./components/header/Header"));
const Content = lazy(() => import("./components/content/Content"));

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1 }));
    dispatch(fetchGeneralInfo());
  }, []);

  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default App;
