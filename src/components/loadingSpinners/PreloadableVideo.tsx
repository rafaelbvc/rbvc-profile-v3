// import { useState, useEffect } from "react";

// type PreloadableVideoProps = {
//     videoPath: string;
//     onVideoLoaded: () => void;
// };

// const PreloadableVideo = ({ videoPath, onVideoLoaded }: PreloadableVideoProps) => {
//     const [videoLoaded, setVideoLoaded] = useState(false);

//     useEffect(() => {
//         const video = document.createElement("video");
//         video.src = videoPath;
//         video.load();

//         video.onloadeddata = () => {
//             setVideoLoaded(true);
//             onVideoLoaded();
//         };

//         return () => {
//             // Limpar recursos, se necessário
//         };
//     }, [videoPath, onVideoLoaded]);

//     return videoLoaded ? (
//         <video autoPlay loop muted className="absolute object-cover w-[100%]  top-0 left-0  h-[100%] video z-[-1]">
//             <source src={videoPath} type="video/mp4" />
//         </video>
//     ) : null;
// };

// export default PreloadableVideo;


import { useState, useEffect } from "react";

type PreloadableVideoProps = {
    videoPath: string;
    onVideoLoaded: () => void;
};

const PreloadableVideo = ({ videoPath, onVideoLoaded }: PreloadableVideoProps) => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement("video");
        video.src = videoPath;
        video.load();

        video.onloadeddata = () => {
            setVideoLoaded(true);
            onVideoLoaded();
        };

        return () => {
            // Limpar recursos, se necessário
        };
    }, [videoPath, onVideoLoaded]);

    return videoLoaded ? (
        <video autoPlay loop muted className="absolute object-cover w-[100%]  top-0 left-0  h-[100%] video z-[-1]">
            <source src={videoPath} type="video/mp4" />
        </video>
    ) : null;
};

export default PreloadableVideo;
