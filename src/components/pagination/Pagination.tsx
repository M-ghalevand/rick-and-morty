import type { FC } from "react";
import { Pagination as MUIPagination, Stack } from "@mui/material";

import styles from "./pagination.module.scss";
import useSelectors from "../../hooks/useSelectors";
import { setPagination } from "../../store/slice/AppSlice";
import { useAppDispatch } from "../../store/ConfigureStore";

const Pagination: FC = () => {
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
            page={selectedPage}
            count={filteredInfo.pages}
            showFirstButton
            showLastButton
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};
export default Pagination;
