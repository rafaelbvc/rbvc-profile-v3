import { CSSProperties } from "react";
import ClipLoader from "react-spinners/CircleLoader";
import { getRandomColorHex, getRandomColorItem, getRandomColorItem2 } from "../../utils/randomColor";

interface CircleLoaderProps {
  customCss?: CSSProperties; // Adicione esta propriedade opcional para estilos personalizados
}

const CircleLoader = ({ ...rest }: CircleLoaderProps) => {
  const randomHexColor = getRandomColorHex();
  const randomItemColor = getRandomColorItem();
  const randomItem2Color = getRandomColorItem2()

  console.log(randomHexColor)


  return (
    <div className="flex flex-col items-center  justify-center h-[100vh]">
      <p className={`${randomItem2Color} my-4 text-xl`}>...those colors are random...</p>
      <ClipLoader
        color={randomHexColor}
        loading={true}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
        {...rest}
      />
      <p className={`${randomItemColor} my-4 text-xl`}>Loading...</p>
    </div>
  );
};

export default CircleLoader;



