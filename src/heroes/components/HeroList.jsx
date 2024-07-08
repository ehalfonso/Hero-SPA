import { HeroCard } from "./HeroCard";
import { getHeroByPublisher } from "../helpers";
import { useCallback } from "react";

export const HeroList = ({ publisher }) => {
  const heroes = useCallback(getHeroByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes?.map((heroe) => (
        <HeroCard key={heroe.id} {...heroe} />
      ))}
    </div>
  );
};
