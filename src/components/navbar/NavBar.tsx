import GetStartedBtn from "../buttons/GetStartedBtn";
import RBVCLogoBtn from "../buttons/RBVCLogoBtn";
import { UseOrientationContext } from "../contexts/OrientationContext";


type TNavBar = {
  classNameRBVCLogoBtn?: string | " "
  classNameGetStarted?: string | " "
}

const NavBar = (props: TNavBar) => {

  const { classNameRBVCLogoBtn, classNameGetStarted } = props

  const { orientation } = UseOrientationContext()

  return (
    <nav id="NavBar" className={`sticky bg-opacity-0 z-20  px-1  grid grid-cols-2 justify-between h-[4rem] z-10 ${orientation ? " w-[100vw]" : " w-[88vw] mx-[6vw] my-[2vh]"}`}>
      <h2 className="hidden">NavBar</h2>
      <menu className="self-center cursor-pointer">
        <RBVCLogoBtn className={classNameRBVCLogoBtn}
        // onClick={() =>
        //   setProfileVisibilityState(handleVisibility(isVisibleProfile))
        // }
        />
      </menu>
      <menu className="flex justify-end p-1 pb-2 cursor-pointer">
        <GetStartedBtn className={classNameGetStarted}
        // onClick={() =>
        //   setGetStartedVisibilityState(handleVisibility(isVisibleGetStarted))
        // }
        />
      </menu>
    </nav>
  );
};

export default NavBar;
