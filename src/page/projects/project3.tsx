import workerSrc from "pdfjs-dist/build/pdf.worker?url";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
export const Project3 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(200);
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
    <div className=" py-6 mt-2 w-full justify-content-center  flex flex-col items-center ">
      <h2>PROJECT 3: INVENT AND INSECT</h2>
      <div
        className="border rounded shadow-md  mt-5 w-full  sm:px-4 md:px-0 max-w-full "
        ref={containerRef}
      >
        <Document file="/projects/project3.pdf">
          {[1, 2].map((page) => (
            <div key={page} className="flex justify-center">
              <Page
                width={width * 0.8}
                pageNumber={page}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
};
