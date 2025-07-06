import { cn } from "@/lib/utils";
import { useState, type FC } from "react";
import { Button } from "./button";

export const FeatureList: FC<{ features: string[] }> = ({ features }) => {
  const [expanded, setExpanded] = useState(false);

  const maxVisible = 5;

  return (
    <>
      {features.length > 0 && (
        <div className="relative">
          <ul
            className={cn(
              "mt-4 flex flex-wrap gap-1 md:gap-2 text-sm  overflow-hidden transition-all duration-500",
              expanded ? "max-h-[1000px]" : " max-h-[100px] md:max-h-[180px]",
            )}
          >
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="bg-gray-100  text-xs px-2 md:px-3 py-1 rounded-full border border-gray-300"
              >
                {feature}
              </li>
            ))}
          </ul>

          {features.length > maxVisible && (
            <Button
              onClick={() => setExpanded(!expanded)}
              className="mt-2  text-sm font-medium hover:underline text-black "
            >
              {expanded ? "Show less" : "Show more"}
            </Button>
          )}
        </div>
      )}
    </>
  );
};
