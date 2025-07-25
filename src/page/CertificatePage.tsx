import { ImageContainer } from "@/components/common/ImageContainer";

export const CertificatePage = () => {
  return (
    <div className="py-10">
      <h1 className="text-center">Certificates</h1>
      <div className="grid grid-cols-3 gap-2 w-full justify-center  mt-10">
        <ImageContainer
          className="border-primary rounded  border-8"
          src="certifications/pic1.avif"
        />
        <ImageContainer
          className="border-primary rounded  border-8"
          src="certifications/pic2.avif"
        />
        <ImageContainer
          className="border-primary rounded  border-8"
          src="certifications/pic4.avif"
        />
        <ImageContainer
          className="border-primary rounded  border-8"
          src="certifications/pic5.avif"
        />
        <ImageContainer
          className="border-primary rounded  border-8"
          src="certifications/pic3.avif"
        />
      </div>
    </div>
  );
};
