import style from "./filter.module.scss";
import Accordion from "../accordion/Accordion";
const Filter = () => {
  return (
    <div className={style.filterRoot}>
      <p className={style.title}>filters</p>
      <div className={style.line}></div>
      <Accordion />
    </div>
  );
};

export default Filter;
