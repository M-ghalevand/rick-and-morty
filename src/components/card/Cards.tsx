import { FC } from "react";
import style from "./card.module.scss";
import type ICharacterResult from "../../types/ICharacterResult";
import Card from "./Card";
import { useAppSelector } from "../../store/ConfigureStore";
import { selectEntities } from "../../store/slice/AppSlice";
import useSelectors from "../../hooks/useSelectors";
import Skeleton from "./Skeleton";

const Cards: FC = () => {
  const { selectSearchBox, selectCharacterLoading } = useSelectors();
  const SelectEntities = useAppSelector(selectEntities);
  const SelectEntitiesArray = Object.values(
    SelectEntities
  ) as ICharacterResult[];
  const filterSelectEntitiesArray = SelectEntitiesArray.filter((item) =>
    item.name.toLowerCase().includes(selectSearchBox.trim().toLowerCase())
  );
  const Skeletons: React.ReactNode[] = [];
  for (let i = 0; i < 20; i++) {
    Skeletons.push(<Skeleton key={i} />);
  }
  return (
    <div className={style.cardsRoot}>
      {!selectCharacterLoading
        ? filterSelectEntitiesArray.map((item) => (
            <Card key={item.id} {...item} />
          ))
        : Skeletons}
    </div>
  );
};

export default Cards;
