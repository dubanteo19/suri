import type { FC } from "react";
import { ImageContainer } from "../common/ImageContainer";
import type { Ability } from "@/page/data/ability";

export const AbilityCard: FC<Ability> = ({
  text,
  imageSrc,
  background = "primary",
  description,
}) => {
  return (
    <div
      className={`flex justify-between items-center bg-${background}  rounded border-black border-2 p-4 `}
    >
      <div>
        <h3 className="text-xl md:text-2xl">{text}</h3>
        <p className="text-sm text-gray-800 italic">{description}</p>
      </div>
      <ImageContainer
        src={imageSrc}
        className="size-30 hidden md:block md:mr-10"
      />
    </div>
  );
};
