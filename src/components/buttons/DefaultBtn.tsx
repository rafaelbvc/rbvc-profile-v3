import { twMerge } from "tailwind-merge";
import { IDefaultBtn } from "../../interfaces/defaultBtn";
import { UseOrientationContext } from "../contexts/OrientationContext";


const DefaultBtn = (props: IDefaultBtn) => {
  const { text, onClick, className, type, children, disabled } = props;

  const { orientation } = UseOrientationContext()

  return (
    <button
      type={type}
      className={twMerge(`${orientation ? "px-2" : "px-[3rem]"}`, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <p className={twMerge("vBtnStyle")}>{text}</p>
    </button>
  );
};

export default DefaultBtn;
