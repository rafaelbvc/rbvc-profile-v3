import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TRBVCLogoBtn = ComponentProps<"button">;

const GetStartedBtn = ({ ...props }: TRBVCLogoBtn, classNameGetStarted?: string) => {
  return (
    <button className="flex mt-2" {...props}>
      <span className="flex flex-nowrap">
        <p className={twMerge("text-2xl font-semibold", classNameGetStarted)}>Get</p>
        <p className="ml-1 text-2xl font-semibold text-golden">Started</p>
      </span>
    </button>
  );
};

export default GetStartedBtn;
