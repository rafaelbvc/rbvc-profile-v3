import CircleLoader from "./CircleLoader";
import { getRandomColorBG } from "../../utils/randomColor"

const PreloaderScreen = () => {
    const randomBackgroundColor = getRandomColorBG();
    return (
        <section className={`top-0 left-0 z-40 w-screen h-screen ${randomBackgroundColor}`}>
            <CircleLoader />
        </section>
    );
};

export default PreloaderScreen;
