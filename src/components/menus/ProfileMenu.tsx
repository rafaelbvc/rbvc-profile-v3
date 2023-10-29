import DefaultBtn from "../buttons/DefaultBtn";
import { twMerge } from "tailwind-merge";
import { TProfileMenu } from "../../types/profileMenu";

const ProfileMenu = (props: TProfileMenu) => {
  const { className, isVisibleHeader } = props;


  return (
    <section className={className}>
      <header
        className={twMerge(
          "flex flex-row justify-between px-3 max-w-[22rem]",
          isVisibleHeader
        )}
      >
        <h3 className="self-end smallTitles">PROFILE</h3>
        <button
          // onClick={() =>
          //   setProfileVisibilityState(handleVisibility(isVisibleProfile))
          // }
          className="self-end smallTitles"
        >
          CLOSE
        </button>
      </header>

      <menu className="flex justify-between">

        <DefaultBtn
          text="ABOUT ME"
        />

        <DefaultBtn
          text="PORTIFOLIO"
        />

        <DefaultBtn
          text="CONTACT"
        />

        <DefaultBtn
          text="HIRE"
        />
      </menu>
    </section>
  );
};

export default ProfileMenu;
