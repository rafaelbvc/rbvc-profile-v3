import ArrowLeft from "../../svg/ArrowRight"
import ArrowRight from "../../svg/ArrowLeft"
import { ForwardRefRenderFunction, ForwardedRef, forwardRef, useState } from "react"
import { RxDotFilled } from 'react-icons/rx';
import { photosPath } from "../../../utils/photosPath"


export interface PhotosModalProps {
  closeModal: () => void;
  ref: ForwardedRef<HTMLDivElement>;
}

const PhotosModal: ForwardRefRenderFunction<HTMLDivElement, PhotosModalProps> = (
  props,
  ref
) => {

  const { closeModal } = props;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photosPath.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photosPath.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (photoPath: number) => {
    setCurrentIndex(photoPath);
  };


  return (
    <article ref={ref} className={`absolute items-center  flex-col z-40 top-0 left-0 flex justify-center w-screen h-screen bg-blackAlpha animate-pingIMG`}>
      <section className={`flex items-center justify-between flex-col mt-[4rem]  w-[24rem] h-[40rem]  ${photosPath[currentIndex].path} rounded-lg shadow-md p-4`}>
        <header className="flex justify-end w-[21rem] px-4">
          <button onClick={closeModal} className="text-3xl text-golden text-bold ">X</button>
        </header>
        <menu className="flex justify-between w-[21rem] mt-1  px-6">
          <button onClick={prevSlide}>
            <ArrowLeft width="14" className="cursor-pointer" />
          </button>
          <menu className='flex justify-center py-2 top-4'>
            {photosPath.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer text-mediumGray"
              >
                <RxDotFilled />
              </div>
            ))}
          </menu>
          <button onClick={nextSlide}>
            <ArrowRight width="14" className="cursor-pointer" />
          </button>
        </menu>
      </section>
    </article>
  )
}

const PhotosModalRef = forwardRef(PhotosModal)

export default PhotosModalRef