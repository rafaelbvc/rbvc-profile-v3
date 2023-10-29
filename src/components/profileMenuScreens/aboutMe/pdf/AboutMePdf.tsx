import { useRef } from "react";
import ReactToPrint from "react-to-print";
import AboutMeScreen from "../AboutMeScreen";
import MenuHeader from "../../../MenuHeader";

const AboutMePdf = () => {


  const aboutMePdfRef = useRef(null);



  const marginTop = "20mm";
  const marginRight = "20mm";
  const marginBottom = "20mm";
  const marginLeft = "20mm";

  const getPageMargins = () => {
    return `@page { 
    removeAfterPrint: true; 
    margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; 
    size: 210mm 297mm;
    display: true;
    }`;
  };

  return (
    <article >
      <ReactToPrint
        trigger={() => (
          <button className="animate-ping pl-[49%] smallTitles">
            PRINT
          </button>
        )}
        content={() => aboutMePdfRef.current}
      />
      <MenuHeader
        className="flex mt-[-2.3rem] justify-between bg-opacity-0"
        titleHeader=""
        buttonText="TO BOTTOM"
        hrefDown=""
        classArrowUp="hidden"
        classArrowDown="hidden"
        classNameArrows="justify-end"
      />

      <style>
        {getPageMargins()}
        <AboutMeScreen ref={aboutMePdfRef} animated={false}/>
      </style>
    </article>
  );
};

export default AboutMePdf;
