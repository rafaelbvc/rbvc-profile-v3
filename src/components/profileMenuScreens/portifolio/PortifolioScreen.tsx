import FindYourMealScreen from "./FindYourMeal/FindYourMealScreen"
import { useState } from "react"
import ArrowLeft from "../../svg/ArrowLeft"
import { RxDotFilled } from "react-icons/rx"
import ArrowRight from "../../svg/ArrowRight"
import TransPayScreen from "./TransPay/TransPayScreen"
import RBVCProfileScreen from "./RBVCProfile/RBVCProfileScreen"
import RBVCProfileServerScreen from "./RBVCProfileServer.tsx/RBVCProfileServerScreen"
import { UseOrientationContext } from "../../contexts/OrientationContext"
import portifolioVideoLandscape from "../../../assets/videos/landscape/portifolioVideoLandscape.mp4"
import portifolioVideoPortrait from "../../../assets/videos/portrait/portifolioVideoPortrait.mp4"
import PreloaderScreen from "../../loadingSpinners/PreloaderScreen"
import PreloadableVideo from "../../loadingSpinners/PreloadableVideo"
import NavBar from "../../navbar/NavBar"
import MenuBottom from "../../menus/MenuBottom"
// import WeatherScreen from "./WeatherScreen"


const projectComponent = [
    {
        component: <FindYourMealScreen />
    },
    {
        component: <TransPayScreen />
    },
    {
        component: <RBVCProfileScreen />
    },
    {
        component: <RBVCProfileServerScreen />
    },
    // {
    //     component: <WeatherScreen />
    // }
]


const PortifolioScreen = () => {

    const { orientation } = UseOrientationContext();
    const moviePath = orientation ? portifolioVideoPortrait : portifolioVideoLandscape;
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoad = () => {
        setVideoLoaded(true);
    };

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projectComponent.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === projectComponent.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (photoPath: number) => {
        setCurrentIndex(photoPath);
    };


    return (
        <article id="PortifolioScreen" className="absolute w-[100%] h-[100%] flex flex-col">
            {!videoLoaded ? <PreloaderScreen /> : null}
            <PreloadableVideo videoPath={moviePath} onVideoLoaded={handleVideoLoad} />
            <NavBar />
            <menu className="flex justify-center max-h-[80rem] mx-auto paddingTScreens max-w-[80rem] ">
                <button onClick={prevSlide}>
                    <ArrowRight width="14" className="cursor-pointer" />
                </button>
                <menu className='flex justify-center py-2 mx-10'>
                    {projectComponent.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer text-mediumGray"
                        >

                            <RxDotFilled />
                        </div>
                    ))}
                </menu>
                <button onClick={nextSlide}>
                    <ArrowLeft width="14" className="cursor-pointer" />
                </button>
            </menu>
            <div className="overflow-auto  h-[80vh] flex justify-center items-center">
                <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap " >
                    {projectComponent[currentIndex].component}
                </section >
            </div>
            <MenuBottom className="z-10 top-[94%]" />
        </article>
    )
}

export default PortifolioScreen