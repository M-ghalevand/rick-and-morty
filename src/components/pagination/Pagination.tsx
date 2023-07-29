import type { FC } from "react";
import { Pagination as MUIPagination, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./pagination.module.scss";
import useSelectors from "../../hooks/useSelectors";
import { setPagination } from "../../store/slice/AppSlice";
import { useAppDispatch } from "../../store/ConfigureStore";

const Pagination: FC = () => {
  const matches = useMediaQuery("(max-width:438px)");
  const matchesSmall = useMediaQuery("(max-width:322px)");
  const dispatch = useAppDispatch();
  const { selectedPage, filteredInfo } = useSelectors();

  // When user selects a page, two dispatches occurs.
  // setPagination for updating the page state in redux,
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPagination(value));
  };
  return (
    <div className={styles.paginationRoot}>
      <div className={styles.paginatios}>
        <Stack spacing={1}>
          <MUIPagination
            size={matches ? "small" : "medium"}
            page={selectedPage}
            count={filteredInfo.pages}
            onChange={handleChange}
            sx={{ margin: "0 auto" }}
            showFirstButton={!matchesSmall ? true : false}
            showLastButton={!matchesSmall ? true : false}
            hidePrevButton={matchesSmall ? true : false}
            hideNextButton={matchesSmall ? true : false}
          />
        </Stack>
      </div>
    </div>
  );
};
export default Pagination;
