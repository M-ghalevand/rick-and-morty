import { FC } from "react";
import style from "./card.module.scss";
import type ICharacterResult from "../../types/ICharacterResult";
import Card from "./Card";
import { useAppSelector } from "../../store/ConfigureStore";
import { selectEntities } from "../../store/slice/AppSlice";
import useSelectors from "../../hooks/useSelectors";
const Cards: FC = () => {
  const { selectSearchBox } = useSelectors();
  const SelectEntities = useAppSelector(selectEntities);
  const SelectEntitiesArray = Object.values(
    SelectEntities
  ) as ICharacterResult[];
  const filterSelectEntitiesArray = SelectEntitiesArray.filter((item) =>
    item.name.toLowerCase().includes(selectSearchBox.trim().toLowerCase())
  );
  return (
    <div className={style.cardsRoot}>
      {filterSelectEntitiesArray.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cards;
