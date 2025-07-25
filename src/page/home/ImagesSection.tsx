import { ImageContainer } from "@/components/common/ImageContainer";

export const ImagesSection = () => {
  return (
    <div
      className="px-5 md:px-10 w-full   flex 
      min-h-[500px]  md:min-h-[600px] justify-center"
    >
      <div className=" w-[400px] relative ">
        <ImageContainer
          className=" absolute h-auto w-[200px] md:w-[400px] z-50 left-2 md:left-50 top-20 -rotate-4"
          src="hero/pic2.avif"
        />
        <ImageContainer
          className=" absolute h-auto w-[200px] md:w-[400px] right-2 md:right-50 top-10 rotate-4"
          src="hero/pic3.avif"
        />
      </div>
    </div>
  );
};
