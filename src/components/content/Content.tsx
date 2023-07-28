import { FC, lazy } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { CircularProgress } from "@mui/material";
import style from "./content.module.scss";
import useSelectors from "../../hooks/useSelectors";

const Pagination = lazy(() => import("../pagination/Pagination"));
const Cards = lazy(() => import("../card/Cards"));
const Filter = lazy(() => import("../filter/Filter"));
const Content: FC = () => {
  // selectInfo  is an object that takes the total number of characters and pages from the server
  // selectCharacterLoading There is a boolean that gets  Information related to api CHARACTERS from the server when it wants
  const { selectInfo, selectCharacterLoading } = useSelectors();
  return (
    <div className={style.contentRoot}>
      <Filter />
      <div className={style.content}>
        <PersonIcon
          fontSize="large"
          sx={{
            color: "#8a8a8a",
            position: "absolute",
            top: "-32px",
            left: "8px",
          }}
        />
        <p className={style.title}>
          Characters:{" "}
          {!selectCharacterLoading ? (
            <span className={style.count}>
              {selectInfo.count > 0 ? selectInfo.count : "0"}
            </span>
          ) : (
            <CircularProgress
              size={16}
              color={"success"}
              sx={{ margin: "0 0 0 17px" }}
            />
          )}
        </p>
        <div className={style.line}></div>
        <Cards />
        <Pagination />
      </div>
    </div>
  );
};

export default Content;
