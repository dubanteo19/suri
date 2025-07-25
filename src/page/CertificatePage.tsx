import { ImageContainer } from "@/components/common/ImageContainer";

export const CertificatePage = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-2xl font-semibold">Certificates</h1>

      <div className="grid grid-cols-3 gap-4 w-full mt-10">
        {/* First row - 2 vertical images, each spans 1.5 columns (col-span-3 divided equally) */}
        <div className="col-span-3 flex justify-center gap-4">
          <ImageContainer
            src="certifications/pic1.avif"
            className="w-[500px]"
          />
          <ImageContainer
            className="w-[500px]"
            src="certifications/pic2.avif"
          />
        </div>

        {/* Second row - 3 horizontal images */}
        {["pic4.avif", "pic5.avif", "pic3.avif"].map((img, i) => (
          <div
            key={i}
            className="border-8 border-primary rounded  flex items-center justify-center"
          >
            <img
              src={`certifications/${img}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
