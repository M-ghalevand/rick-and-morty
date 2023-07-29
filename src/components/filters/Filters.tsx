import { FC, lazy, useCallback, Suspense } from "react";

import styles from "./filters.module.scss";
import useSelectors from "../../hooks/useSelectors";
import { clearAllFilters } from "../../store/slice/AppSlice";
import { useAppDispatch } from "../../store/ConfigureStore";

const Accordion = lazy(() => import("../accordion/Accordion"));
const Button = lazy(() => import("@mui/material/Button"));

const Filters: FC = () => {
  const dispatch = useAppDispatch();
  const { selectedStatus, selectedGender, selectedSpecies } = useSelectors();

  // When user clicks on Clear all button, two dispatches occurs.
  // clearAllFilters for clearing all applied filters,
  const handleClearAllFilters = useCallback(() => {
    dispatch(clearAllFilters());
  }, [dispatch]);

  return (
    <div className={styles.filterRoot}>
      <p className={styles.title}>filters</p>
      {(selectedStatus || selectedGender || selectedSpecies) && (
        <Suspense>
          <Button
            variant={"outlined"}
            size="small"
            color={"error"}
            sx={{ position: "absolute", top: "-30px", right: "20px" }}
            onClick={handleClearAllFilters}
          >
            Clear all
          </Button>
        </Suspense>
      )}

      <div className={styles.line}></div>
      <Suspense>
        <Accordion />
      </Suspense>
    </div>
  );
};

export default Filters;
