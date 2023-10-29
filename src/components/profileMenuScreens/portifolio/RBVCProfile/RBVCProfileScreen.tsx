import PortifolioPhotoContainer from "../PortifolioPhotoContainer";
import rbvcProfile from "./RBVCProfile.jpg";

const RBVCProfileScreen = () => {


  return (
    <section className="flex justify-center mx-auto paddingYScreens max-w-[80rem] flex-wrap lg:flex-nowrap" >
      <section className="flex flex-col items-center p-2 lg:w-1/2 margins">
        <h4 className="mb-2 text-right text-bold bounceTitles">
          Rafael Vendramini - Profile
        </h4>
        <PortifolioPhotoContainer className="mb-[2rem] lg:mb-0 animate-pingIMG" src={rbvcProfile} alt="Rafael Vendramini - Profile" href="https://rbvcprofile.netlify.app/" />
      </section>
      <section className="flex flex-col p-2 items-left margins animate-pingText">
        <p className="text-center text-bold">
          Client Side - Host (Netlify)
        </p>
        <br /><br /><br />
        <p>Project developed from scratch
          <br /><br />
          •	JavaScript<br />
          •	React<br />
          •	TypeScript<br />
          •	Tailwindcss<br /><br />
          •	Private and Public Routes<br />
          •	Error handling<br />
          •	Authentication<br />
          •	Middleware, Hashers and Json Web Tokens<br />
          •	Context API - isAuth / isVisible<br /><br />
        </p>
      </section>
    </section>
  );
};

export default RBVCProfileScreen;
