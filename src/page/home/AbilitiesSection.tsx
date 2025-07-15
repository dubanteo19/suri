import { Title } from "@/components/common/Title";
import { AbilityCard } from "@/components/ui/AbilityCard";
import { abilities } from "../data/ability";

export const AbilitiesSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 md:gap-0  ">
      <div className=" bg-primary-foreground  flex flex-col ">
        <Title>Skills & Interests</Title>
        <div className="grid  gap-5 mt-4 text-white py-2 grow">
          {abilities.map((item, index) => (
            <AbilityCard {...item} key={index} />
          ))}
        </div>
      </div>
      <div className="bg-primary flex flex-col  min-h-[450px]">
        <Title className="bg-primary-foreground text-white">
          My Experience So Far
        </Title>
        <div className="flex  flex-col justify-center gap-10  md:gap-10  text-center grow text-primary-foreground">
          <div>
            <p className="text-xl font-normal">High school teacher</p>
            <p className="  text-xl md:text-xl font-bold">
              Duong Bach Mai High School
            </p>
          </div>
          <div>
            <p className="text-xl font-normal">Founder - Manager - Teacher</p>
            <p className="  text-xl md:text-xl font-bold">
              Rainbow English Centre (VN)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
