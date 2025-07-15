import type { Ability } from "@/page/data/ability";
import type { FC } from "react";

export const AbilityCard: FC<Ability> = ({ text, description }) => {
  return (
    <div className={` rounded  px-4 text-center`}>
      <h3 className="text-lg font-medium md:text-xl">{text}</h3>
      <p className="text-sm  italic">{description}</p>
    </div>
  );
};
