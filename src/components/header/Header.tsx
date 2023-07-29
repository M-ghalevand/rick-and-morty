import { FC, lazy, Suspense } from "react";

import styles from "./header.module.scss";
import banner from "../../assets/img/banner.png";
import NavBar from "../navBar/NavBar";

const SearchBox = lazy(() => import("../searchBox/SearchBox"));
const Header: FC = () => {
  return (
    <>
      <NavBar />
      <div className={styles.headerContainer}>
        <img
          src={banner}
          alt="banner rick and morty"
          className={styles.bannerImage}
        />
        <Suspense>
          <SearchBox />
        </Suspense>
      </div>
    </>
  );
};

export default Header;
