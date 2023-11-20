import { UseOrientationContext } from "../contexts/OrientationContext";
import contactVideoLandscape from "../../assets/videos/landscape/contactVideoLandscape.mp4"
import contactVideoPortrait from "../../assets/videos/portrait/contactVideoPortrait.mp4"
import AdressLogo from "../svg/AdressLogo";
import DiscordLogo from "../svg/DiscordLogo";
import EmailLogo from "../svg/EmailLogo";
import LinkedInLogo from "../svg/LinkedInLogo";
import WhatsAppLogo from "../svg/WhatsAppLogo";
import YoutubeLogo from "../svg/YoutubeLogo";
import { useState } from "react";
import PreloaderScreen from "../loadingSpinners/PreloaderScreen";
import PreloadableVideo from "../loadingSpinners/PreloadableVideo";
import NavBar from "../navbar/NavBar";
import MenuBottom from "../menus/MenuBottom";

const ContactScreen: React.FC = () => {

  const { orientation } = UseOrientationContext();
  const moviePath = orientation ? contactVideoPortrait : contactVideoLandscape;
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <article id="ContactScreen" className="absolute w-[100%] h-[100%] flex flex-col">
      {!videoLoaded ? <PreloaderScreen /> : null}
      <PreloadableVideo videoPath={moviePath} onVideoLoaded={handleVideoLoad} />
      <NavBar classNameGetStarted={`${orientation ? "text-mediumGray" : " "}`} classNameRBVCLogoBtn={`${orientation ? "text-mediumGray" : " "}`} />
      <section className="flex flex-col h-[80%] items-center justify-center paddingYScreens">
        <section className="flex flex-col justify-between gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6  py-3 sm:flex-wrap margins sm:flex-row  max-w-[48rem]">
          <a
            className="contactScreen"
            href="https://www.youtube.com/@rafaelvendramini2598"
            target="_blank"
          >

            <YoutubeLogo className="svgContactScreen" />

            <p className={`w-[11.25rem] text-center animate-pingText ${orientation ? "text-mediumGray" : " "}`}>
              @rafaelvendramini2598
            </p>
            <p className=" text-golden w-[4.1rem] text-center animate-pingText">
              Youtube
            </p>
          </a>

          <a
            className="contactScreen"
            href="https://discord.com/channels/1137311403305349130/1137311404207112295 "
            target="_blank"
          >
            <DiscordLogo className="svgContactScreen" />
            <p className={`w-[11.25rem] text-center animate-pingText ${orientation ? "text-mediumGray" : " "}`}>
              rafaelvendramini
            </p>
            <p className="text-golden w-[4.1rem] text-center animate-pingText">
              Discord
            </p>
          </a>

          <a
            className="contactScreen"
            href="https://api.whatsapp.com/send?phone=15998254287"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppLogo className="svgContactScreen" />
            <p className={`w-[11.25rem] text-center animate-pingText ${orientation ? "text-mediumGray" : " "}`}>
              (+55) 15 9982542-87
            </p>
            <p className=" text-golden w-[4.1rem] text-center animate-pingText">
              Mobile
            </p>
          </a>

          <a
            className="contactScreen"
            href="https://www.linkedin.com/in/rafael-vendramini/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInLogo className="svgContactScreen" />

            <p className={`w-[11.25rem] text-center animate-pingText ${orientation ? "text-mediumGray" : " "}`}>
              /rafael-vendramini/
            </p>
            <p className=" text-golden w-[4.1rem] text-center animate-pingText">
              Linked In
            </p>
          </a>

          <a
            className="contactScreen"
            href="mailto:rafaelbvc@hotmail.com"
          >
            <EmailLogo className="svgContactScreen" fillColor="#b6b6b6" />
            <p className={`w-[11.25rem] text-center animate-pingText ${orientation ? "text-mediumGray" : " "}`}>
              rafaelbvc@hotmail.com
            </p>
            <p className=" text-golden w-[4.1rem] text-center animate-pingText">
              E-mail
            </p>
          </a>

          <div className="contactScreen">
            <AdressLogo className="svgContactScreen" />
            <p className={`w-[11.25rem] text-center animate-pingText ${orientation ? "text-mediumGray" : " "}`}>São Paulo</p>
            <p className=" text-golden w-[4.1rem] text-center animate-pingText">
              &nbsp; Brazil
            </p>
          </div>
        </section>

      </section>
      <MenuBottom className="z-10 top-[94%]" />
    </article>
  );
};

export default ContactScreen;
