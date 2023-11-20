import React, { useState } from "react";
import { UseOrientationContext } from "../contexts/OrientationContext";
import PreloaderScreen from "../loadingSpinners/PreloaderScreen";
import PreloadableVideo from "../loadingSpinners/PreloadableVideo";
import homeVideoPortrait from "../../assets/videos/portrait/homeVideoPortrait.mp4"
import homeVideoLandscape from "../../assets/videos/landscape/homeVideoLandscape.mp4"
import NavBar from "../navbar/NavBar";
import MenuBottom from "../menus/MenuBottom";
import UnderConstructionSVG from "../svg/UnderConstructionSVG";


const HomeScreen: React.FC = () => {
    const { orientation } = UseOrientationContext();
    const moviePath = orientation ? homeVideoPortrait : homeVideoLandscape;
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    return (
        <article id="HomeScreen" className="absolute w-[100%] h-[100%] flex flex-col">
            {!videoLoaded ? <PreloaderScreen /> : null}
            <PreloadableVideo videoPath={moviePath} onVideoLoaded={handleVideoLoad} />
            <NavBar classNameRBVCLogoBtn="text-lightGray" classNameGetStarted="text-lightGray" />
            <section className="flex flex-col h-[80%] items-center justify-center paddingYScreens">
                <section className="flex flex-col gap-2 sm:flex-wrap sm:flex-row margins ">
                    <div className="p-3 animate-pingText">
                        <p className="text-center whitespace-normal  md:text-lg text-lightGray" style={{ lineHeight: "1.2" }}>
                            Hello, my name is Rafael, I am the developer of this page where you are welcome! Feel free to browse,<br /> my contact details are in the contact section.<br /><br />
                            Project intended as a portfolio and personal description in technical and personal skills.
                        </p>
                    </div>
                    <div className="p-3 animate-pingIMG">
                        <UnderConstructionSVG width={"100%"} fillColor="#FCFCFF" />
                    </div>
                </section>
            </section>
            <MenuBottom className="z-10 top-[94%]" />
        </article>
    );
};

export default HomeScreen;


