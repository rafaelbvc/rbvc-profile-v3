
import { twMerge } from "tailwind-merge";
import { UseOrientationContext } from "../contexts/OrientationContext";
import { TScreensPropsTypes } from "../../types/screensPropsType";
import DefaultBtn from "../buttons/DefaultBtn";
import { TProfileMenu } from "../../types/profileMenu";

const MenuBottom = (props: TScreensPropsTypes & TProfileMenu) => {
  const { className, onClickAboutMe, onClickProtifolio, onClickContact, onClickHire, onClickHome } = props;

  const { orientation } = UseOrientationContext()



  return (
    <menu className={twMerge("top-0 left-0 w-screen h-screen absolute", className)}>
      <section className={`flex justify-center bg-opacity-0  px-1  h-[2rem]  ${orientation ? " w-[100vw]" : " place-content-center w-[100vw] top-[90vh]"}`}>
        <h2 className="hidden">Menu Bottom</h2>
        <menu className="flex ">
          <a href="/">
            <DefaultBtn
              text="HOME"
              onClick={onClickHome}

            />
          </a>
          <a href="/aboutme">
            <DefaultBtn
              text="ABOUT ME"
              onClick={onClickAboutMe}
            /></a>
          <a href="/portifolio">
            <DefaultBtn
              text="PORTIFOLIO"
              onClick={onClickProtifolio}
            />
          </a>
          <a href="/contact">
            <DefaultBtn
              text="CONTACT"
              onClick={onClickContact}
            />
          </a>
          <a href="/hire">
            <DefaultBtn
              text="HIRE"
              onClick={onClickHire}
            />
          </a>
        </menu>
      </section>
    </menu >
  );
};

export default MenuBottom;
