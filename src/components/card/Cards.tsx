import { FC, lazy, useMemo, Suspense } from "react";
import type ICharacterResult from "../../types/ICharacterResult";
import styles from "./card.module.scss";
import { useAppSelector } from "../../store/ConfigureStore";
import { selectEntities } from "../../store/slice/AppSlice";
import useSelectors from "../../hooks/useSelectors";

const CardSkeleton = lazy(() => import("./CardSkeleton"));
const Card = lazy(() => import("./Card"));

const Cards: FC = () => {
  const {  characterLoading } = useSelectors();

  const SelectEntities = useAppSelector(selectEntities);
  const SelectEntitiesArray = Object.values(
    SelectEntities
  ) as ICharacterResult[];

  const CardsSkeleton: React.ReactNode[] = useMemo(() => {
    const Skeletons: React.ReactNode[] = [];
    for (let i = 0; i < 20; i++) {
      Skeletons.push(<CardSkeleton key={i} />);
    }
    return Skeletons;
  }, []);

  const statusColor = (status: string): string => {
    switch (status) {
      case "Alive":
        return "#247F66";
      case "Dead":
        return "#c01010";
      case "unknown":
        return "#5d5d5d";
      default:
        return "#5d5d5d";
    }
  };

  return (
    <div className={styles.cardsRoot}>
      {!characterLoading ? (
        <Suspense>
          {SelectEntitiesArray.map((item) => (
            <Card key={item.id} {...item} color={statusColor(item.status)} />
          ))}
        </Suspense>
      ) : (
        <Suspense>{CardsSkeleton}</Suspense>
      )}
    </div>
  );
};

export default Cards;
