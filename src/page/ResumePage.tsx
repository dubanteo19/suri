import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/build/pdf.worker?url";
import { useEffect, useRef, useState } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
export const ResumePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(600);
  useEffect(() => {
    const resize = () => { if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div
        className="border rounded shadow-md  mt-5 w-full  sm:px-4 md:px-0 max-w-full "
        ref={containerRef}
      >
        <Document file="/resume/cv.pdf">
          {[1, 2].map((page) => (
            <div key={page} className="flex justify-center">
              <Page
                width={width}
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
