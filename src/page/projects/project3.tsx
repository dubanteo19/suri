import { ImageContainer } from "@/components/common/ImageContainer";
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
    <div className="py-6 px-4 mt-2 w-full flex gap-4 flex-col">
      <h2 className="text-center">PROJECT 3: INVENT AND INSECT</h2>
      <div>
        <h3>Part 1. Links to Pinterest board</h3>
        <a
          className="text-black font-bold text-2xl"
          href="https://www.pinterest.com/solokokone8/suris-board"
          target="_blank"
        >
          https://www.pinterest.com/solokokone8/suris-board
        </a>
      </div>
      <div>
        <h3>Part 2. Introduction video</h3>
        <div className="flex justify-center">
          <video
            width={400}
            height={180}
            src="/projects/introduction.mp4"
            controls
          />
        </div>
      </div>
      <div>
        <h3>
          Part 3. Two artefacts from placement 2 showcasing math or literacy
          activities.
        </h3>
        <div>
          <h4 className="ml-4 my-2">Artefact 1: MATH EXPERIENCE</h4>
          <Document file="/projects/math.pdf">
            {[1, 2, 3].map((page) => (
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
        <div>
          <h4 className="ml-4 my-2">Artefact 2: LITERACY EXPERIENCE</h4>
          <Document file="/projects/literacy.pdf">
            {[1, 2, 3].map((page) => (
              <div key={page} className="flex justify-center">
                <Page
                  width={width * 0.8}
                  pageNumber={page}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />{" "}
              </div>
            ))}
          </Document>
        </div>
      </div>

      <h3>Part 4. Evidence of a group work experience </h3>
      <div className="justify-content-center  flex flex-col items-center ">
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
      <div className="flex flex-col gap-4">
        <h3>
          Part 5. Evidence of volunteerism or community involvement (related to
          ECE).
        </h3>

        <ImageContainer src="/projects/part3-certificate.jpeg" />
        <ImageContainer src="/projects/part3-certificate2.jpg" />
      </div>
    </div>
  );
};
