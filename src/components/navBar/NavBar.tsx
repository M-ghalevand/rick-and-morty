import style from "./navBar.module.scss";
import Icon from "../../assets/svg/Icon";
import NightDayModeToggleSwitch from "../nightDayModeToggleSwitch/NightDayModeToggleSwitch";

import type { FC } from "react";
import * as React from "react";
import { CircularProgress } from "@mui/material";
import useSelectors from "../../hooks/useSelectors";

const NavBar: FC = () => {
  const { themeMode, selectGeneralInfoLoading, selectGeneralInfo } =
    useSelectors();

  return (
    <nav
      className={style.nav}
      style={{ backgroundColor: themeMode === "dark" ? "black" : "white" }}
    >
      <NightDayModeToggleSwitch />
      <div className={style.icon}>
        <Icon />
      </div>
      <div className={style.items}>
        <p>
          characters:
          <span>
            {selectGeneralInfoLoading ? (
              <CircularProgress size={16} color={"success"} />
            ) : (
              selectGeneralInfo?.characters?.info?.count
            )}
          </span>
        </p>
        <p>
          episodes:
          <span>
            {selectGeneralInfoLoading ? (
              <CircularProgress size={16} color={"success"} />
            ) : (
              selectGeneralInfo?.episodes?.info?.count
            )}
          </span>
        </p>

        <p>
          locations:
          <span>
            {selectGeneralInfoLoading ? (
              <CircularProgress size={16} color={"success"} />
            ) : (
              selectGeneralInfo?.characters?.info?.count
            )}
          </span>
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
