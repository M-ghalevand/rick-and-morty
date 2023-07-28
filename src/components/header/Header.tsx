import type { FC } from "react";

import styleHeader from "./header.module.scss";
import banner from "../../assets/img/banner.png";
import { lazy } from "react";
const NavBar = lazy(() => import("../navBar/NavBar"));
const Search = lazy(() => import("../search/Search"));
const Header: FC = () => {
  return (
    <>
      <NavBar />
      <div className={styleHeader.headerContainer}>
        <img
          src={banner}
          alt="banner rick and morty"
          className={styleHeader.bannerImage}
        />
        <Search />
      </div>
    </>
  );
};

export default Header;
