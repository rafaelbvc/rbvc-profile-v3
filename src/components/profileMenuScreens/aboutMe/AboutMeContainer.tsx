import AboutMePdf from "./pdf/AboutMePdf";
import AboutMeScreen, { IAnimate } from "./AboutMeScreen";
import { UseOrientationContext } from "../../contexts/OrientationContext";
import { useState } from "react";
import PreloadableVideo from "../../loadingSpinners/PreloadableVideo";
import NavBar from "../../navbar/NavBar";
import MenuBottom from "../../menus/MenuBottom";
import aboutMeVideoLandscape from "../../../assets/videos/landscape/aboutMeVideoLandscape.mp4"
import aboutMeVideoPortrait from "../../../assets/videos/portrait/aboutMeVideoPortrait.mp4"
import PreloaderScreen from "../../loadingSpinners/PreloaderScreen";


const AboutMeContainer = ({ animated }: IAnimate) => {

  const { orientation } = UseOrientationContext();
  const moviePath = orientation ? aboutMeVideoPortrait : aboutMeVideoLandscape;
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };


  return (
    <section id="AboutMe" className="absolute w-[100%] h-[100%]">
      {!videoLoaded ? <PreloaderScreen /> : null}
      <PreloadableVideo videoPath={moviePath} onVideoLoaded={handleVideoLoad} />
      <NavBar />
      <AboutMePdf />
      <AboutMeScreen animated={animated} />
      <MenuBottom className="z-10 top-[94%]" />
    </section>
  );
};

export default AboutMeContainer;
