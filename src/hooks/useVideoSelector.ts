// import { UseOrientationContext } from "../components/contexts/OrientationContext";
// import { useEffect, useState } from "react";

// //Todo Receber valor do do componente menu
// export const useVideoSelector = () => {
//   const { orientation } = UseOrientationContext();

//   const [returnComponentVideo] = useState<number | 0>(0);
//   const [videoSrc, setVideoSrc] = useState<string>(
//     "../../assets/videos/portrait/homeVideoPortrait.mp4"
//   );

//   const handleVideoSelector = () => {
//     if (orientation) {
//       if (returnComponentVideo === 0) {
//         setVideoSrc("../../assets/videos/portrait/homeVideoPortrait.mp4");
//       }
//       if (returnComponentVideo === 1) {
//         setVideoSrc("../../assets/videos/portrait/hireMeVideoPortrait.mp4");
//       }
//       if (returnComponentVideo === 2) {
//         setVideoSrc("../../assets/videos/portrait/homeVideoPortrait.mp4");
//       }
//       if (returnComponentVideo === 3) {
//         setVideoSrc("../../assets/videos/portrait/homeVideoPortrait.mp4");
//       }
//       if (returnComponentVideo === 4) {
//         setVideoSrc("../../assets/videos/portrait/homeVideoPortrait.mp4");
//       }
//     }
//     if (!orientation) {
//       if (returnComponentVideo === 0) {
//         setVideoSrc("../../assets/videos/landscape/homeVideoLandscape.mp4");
//       }
//       if (returnComponentVideo === 1) {
//         setVideoSrc("../../assets/videos/landscape/hireMeVideoLandscape.mp4");
//       }
//       if (returnComponentVideo === 2) {
//         setVideoSrc("../../assets/videos/landscape/homeVideoLandscape.mp4");
//       }
//       if (returnComponentVideo === 3) {
//         setVideoSrc("../../assets/videos/landscape/homeVideoLandscape.mp4");
//       }
//       if (returnComponentVideo === 4) {
//         setVideoSrc("../../assets/videos/landscape/homeVideoLandscape.mp4");
//       }
//     }
//   };


//   useEffect(() => {
//     handleVideoSelector();
//   }, [returnComponentVideo]);

//   return videoSrc;
// };
