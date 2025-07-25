import { ImageContainer } from "@/components/common/ImageContainer";

export const CertificatePage = () => {
  return (
    <div className="py-10">
      <h1 className="text-center">Certificates</h1>
      <div className="flex flex-wrap gap-10 justify-center  mt-10">
        <ImageContainer className="w-[300px]" src="certifications/pic1.avif" />
        <ImageContainer className="w-[300px]" src="certifications/pic2.avif" />
        <ImageContainer className="w-[300px]" src="certifications/pic3.avif" />
        <ImageContainer className="w-[300px]" src="certifications/pic4.avif" />
        <ImageContainer className="w-[300px]" src="certifications/pic5.avif" />
      </div>
    </div>
  );
};
