import { FC, lazy, Suspense } from "react";

import style from "./content.module.scss";
import useSelectors from "../../hooks/useSelectors";
import Filters from "../filters/Filters";
import Cards from "../card/Cards";

const CircularProgress = lazy(() => import("@mui/material/CircularProgress"));
const PersonIcon = lazy(() => import("@mui/icons-material/Person"));
const Pagination = lazy(() => import("../pagination/Pagination"));
const Content: FC = () => {
  const { filteredInfo, characterLoading } = useSelectors();

  return (
    <div className={style.contentRoot}>
      <Filters />
      <div className={style.content}>
        <Suspense>
          <PersonIcon
            fontSize="large"
            sx={{
              color: "#8a8a8a",
              position: "absolute",
              top: "-32px",
              left: "8px",
            }}
          />
        </Suspense>
        <p className={style.title}>
          Characters:{" "}
          {!characterLoading ? (
            <span className={style.count}>
              {filteredInfo.count > 0 ? filteredInfo.count : "0"}
            </span>
          ) : (
            <Suspense>
              <CircularProgress
                size={16}
                color={"success"}
                sx={{ margin: "0 0 0 17px" }}
              />
            </Suspense>
          )}
        </p>
        <div className={style.line}></div>
        <Cards />
        {filteredInfo.pages > 0 && (
          <Suspense>
            <Pagination />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Content;
