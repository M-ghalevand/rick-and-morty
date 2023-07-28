import type { FC } from "react";
import { Pagination as MUIPagination, Stack } from "@mui/material";
import style from "./pagination.module.scss";
import useSelectors from "../../hooks/useSelectors";
import { fetchCharacters, setPagination } from "../../store/slice/AppSlice";
import { useAppDispatch } from "../../store/ConfigureStore";

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedPage, selectInfo, selectStatus, selectGender, selectSpecie } =
    useSelectors();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(
      fetchCharacters({
        page: value,
        gender: selectGender,
        species: selectSpecie,
        status: selectStatus,
      })
    );
    dispatch(setPagination(value));
  };
  return (
    <div className={style.paginationRoot}>
      <div className={style.paginatios}>
        <Stack spacing={1}>
          <MUIPagination
            page={selectedPage}
            count={selectInfo.pages}
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
