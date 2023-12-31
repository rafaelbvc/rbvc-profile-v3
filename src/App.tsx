// import { Route, Routes } from "react-router-dom";
// import { queryClient } from "./services/queryClient";
// import { QueryClientProvider } from "react-query";
// import { AuthProvider } from "./components/contexts/AuthContext";
// import OrientationProvider from "./components/contexts/OrientationContext";
// import { Suspense } from "react";
// import HireScreen from "./components/profileMenuScreens/HireScreen";
// import HomeScreen from "./components/profileMenuScreens/HomeScreen";
// import PreloaderScreen from "./components/loadingSpinners/PreloaderScreen";
// import ContactScreen from "./components/profileMenuScreens/ContactScreen";
// import PortifolioScreen from "./components/profileMenuScreens/portifolio/PortifolioScreen";
// import AboutMeContainer from "./components/profileMenuScreens/aboutMe/AboutMeContainer";
// import ErrorPage from "./pages/ErrorPage";



// function App() {
//   return (
//     <AuthProvider>
//       <OrientationProvider>
//         <QueryClientProvider client={queryClient}>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <Suspense fallback={<PreloaderScreen />}>
//                   <HomeScreen />
//                 </Suspense>
//               }
//             />
//             <Route path="*" errorElement={<ErrorPage />} element={<HomeScreen />} />
//             <Route
//               path="/hire"
//               element={
//                 <Suspense fallback={<PreloaderScreen />}>
//                   <HireScreen />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="/contact"
//               element={
//                 <Suspense fallback={<PreloaderScreen />}>
//                   <ContactScreen />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="/portifolio"
//               element={
//                 <Suspense fallback={<PreloaderScreen />}>
//                   <PortifolioScreen />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="/aboutme"
//               element={
//                 <Suspense fallback={<PreloaderScreen />}>
//                   <AboutMeContainer animated={true} />
//                 </Suspense>
//               }
//             />
//           </Routes>
//         </QueryClientProvider>
//       </OrientationProvider>
//     </AuthProvider>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "react-query";
import { AuthProvider } from "./components/contexts/AuthContext";
import OrientationProvider from "./components/contexts/OrientationContext";
import { Suspense } from "react";
import HireScreen from "./components/profileMenuScreens/HireScreen";
import HomeScreen from "./components/profileMenuScreens/HomeScreen";
import PreloaderScreen from "./components/loadingSpinners/PreloaderScreen";
import ContactScreen from "./components/profileMenuScreens/ContactScreen";
import PortifolioScreen from "./components/profileMenuScreens/portifolio/PortifolioScreen";
import AboutMeContainer from "./components/profileMenuScreens/aboutMe/AboutMeContainer";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./layouts/Layout";



function App() {
  return (
    <AuthProvider>
      <OrientationProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<PreloaderScreen />}>
                    <HomeScreen />
                  </Suspense>
                }
              />
              <Route path="*" errorElement={<ErrorPage />} element={<HomeScreen />} />
              <Route
                path="/hire"
                element={
                  <Suspense fallback={<PreloaderScreen />}>

                    <HireScreen />

                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<PreloaderScreen />}>

                    <ContactScreen />

                  </Suspense>
                }
              />
              <Route
                path="/portifolio"
                element={
                  <Suspense fallback={<PreloaderScreen />}>

                    <PortifolioScreen />

                  </Suspense>
                }
              />
              <Route
                path="/aboutme"
                element={
                  <Suspense fallback={<PreloaderScreen />}>

                    <AboutMeContainer animated={true} />

                  </Suspense>
                }
              />
            </Route >
          </Routes>

        </QueryClientProvider>
      </OrientationProvider>
    </AuthProvider>
  );
}

export default App;
