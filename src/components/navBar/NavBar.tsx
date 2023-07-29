import { FC, lazy, Suspense } from "react";
import styles from "./navBar.module.scss";
import useSelectors from "../../hooks/useSelectors";

const Icon = lazy(() => import("../../assets/svg/Icon"));
const NightDayModeToggleSwitch = lazy(
  () => import("../nightDayModeToggleSwitch/NightDayModeToggleSwitch")
);
const CircularProgress = lazy(() => import("@mui/material/CircularProgress"));

const NavBar: FC = () => {
  const { themeMode, generalInfoLoading, selectGeneralInfo } = useSelectors();

  return (
    <nav
      className={styles.nav}
      style={{ backgroundColor: themeMode === "dark" ? "black" : "white" }}
    >
      <Suspense>
        <NightDayModeToggleSwitch />
      </Suspense>
      <div className={styles.icon}>
        <Suspense>
          <Icon />
        </Suspense>
      </div>
      <div className={styles.items}>
        <p>
          characters:
          <span>
            {generalInfoLoading ? (
              <Suspense>
                <CircularProgress size={16} color={"success"} />
              </Suspense>
            ) : (
              selectGeneralInfo?.characters?.info?.count
            )}
          </span>
        </p>
        <p>
          episodes:
          <span>
            {generalInfoLoading ? (
              <Suspense>
                <CircularProgress size={16} color={"success"} />
              </Suspense>
            ) : (
              selectGeneralInfo?.episodes?.info?.count
            )}
          </span>
        </p>

        <p>
          locations:
          <span>
            {generalInfoLoading ? (
              <Suspense>
                <CircularProgress size={16} color={"success"} />
              </Suspense>
            ) : (
              selectGeneralInfo?.locations?.info?.count
            )}
          </span>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
