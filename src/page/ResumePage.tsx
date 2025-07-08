import { AButton } from "@/components/ui/CallToActionButton";
import { DownloadIcon } from "lucide-react";
import workerSrc from "pdfjs-dist/build/pdf.worker?url";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
export const ResumePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(600);
  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <div className=" py-6 mt-2 w-full flex flex-col items-center ">
      <AButton
        className="bg-primary  text-black border-black border-2"
        href="/resume.pdf"
        icon={<DownloadIcon />}
        download
      >
        Download CV
      </AButton>
      <div
        className="border rounded shadow-md  mt-5 w-full  sm:px-4 md:px-0 max-w-full "
        ref={containerRef}
      >
        <Document file="/resume.pdf">
          <Page
            width={width}
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
      <AButton
        className="bg-primary  text-black border-black border-2 mt-5"
        href="/resume.pdf"
        icon={<DownloadIcon />}
        download
      >
        Download CV
      </AButton>
    </div>
  );
};
