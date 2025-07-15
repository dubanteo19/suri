import { ImageContainer } from "@/components/common/ImageContainer";

export const ImagesSection = () => {
  return (
    <div className="bg-primary-foreground px-5 md:px-10 w-full py-10 border-t-2 border-2 flex 
      min-h-[500px]  md:min-h-[600px] justify-center">
      <div className="relative w-full">
        <ImageContainer
          className=" absolute h-auto w-[200px] md:w-[300px] z-50 left-2 md:left-80 top-20 -rotate-4"
          src="hero/pic2.avif"
        />
        <ImageContainer
          className=" absolute h-auto w-[200px] md:w-[300px] right-2 md:right-80 top-10 rotate-4"
          src="hero/pic3.avif"
        />
      </div>
    </div>
  );
};
