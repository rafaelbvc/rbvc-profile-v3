import { ComponentProps } from "react";
import RbvcLogo from "../svg/RbvcLogo";
import { twMerge } from "tailwind-merge";
import { UseOrientationContext } from "../contexts/OrientationContext";

type TRBVCLogoBtn = ComponentProps<"button">;

const RBVCLogoBtn = ({ ...props }: TRBVCLogoBtn, classNameRBVCLogoBtn?: string) => {

  const { orientation } = UseOrientationContext()

  return (
    <button className="flex" {...props}>
      <span className={`flex ${orientation ? " " : " flex-nowrap"}`}>
        <RbvcLogo />
        <div className="self-center cursor-pointer xl:flex xl:flex-wrap">
          <p className={twMerge("text-start font-semibold mb-[-0.32rem] tracking-[0.116rem]", classNameRBVCLogoBtn)}>
            RAFAEL VENDRAMINI
          </p>
          <p className={`tracking-tight text-golden ${orientation ? " hidden" : " "}`}> &nbsp;|&nbsp;</p>
          <p className={`tracking-tight text-golden ${orientation ? " " : " uppercase tracking-widest"}`}> RBVC Soluções Tecnológicas</p>
        </div>
      </span>
    </button>
  );
};

export default RBVCLogoBtn;