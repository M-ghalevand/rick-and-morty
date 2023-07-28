import { FC, lazy } from "react";
import style from "./filter.module.scss";
import { Button } from "@mui/material";
import useSelectors from "../../hooks/useSelectors";
import { clearAll, fetchCharacters } from "../../store/slice/AppSlice";
import { useAppDispatch } from "../../store/ConfigureStore";

const Accordion = lazy(() => import("../accordion/Accordion"));

const Filter: FC = () => {
  const dispatch = useAppDispatch();
  const { selectCharactersStatus, selectGender, selectSpecie } = useSelectors();
  const handleClearAll = () => {
    dispatch(clearAll());
    dispatch(fetchCharacters({}));
  };
  return (
    <div className={style.filterRoot}>
      <p className={style.title}>filters</p>
      {(selectCharactersStatus || selectGender || selectSpecie) && (
        <Button
          variant={"outlined"}
          size="small"
          color={"error"}
          sx={{ position: "absolute", top: "-30px", right: "20px" }}
          onClick={handleClearAll}
        >
          Clear all
        </Button>
      )}

      <div className={style.line}></div>
      <Accordion />
    </div>
  );
};

export default Filter;
