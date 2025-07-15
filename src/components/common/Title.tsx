import { cn } from "@/lib/utils";
import type { FC, ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}
export const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <h3
      className={cn(
        "text-center bg-primary font-bold text-2xl   whitespace-nowrap    py-4 px-2  ",
        className,
      )}
    >
      {children}
    </h3>
  );
};
