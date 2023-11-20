import { UseOrientationContext } from "../contexts/OrientationContext";
import NavBar from "../navbar/NavBar";
import hireMeVideoPortrait from "../../assets/videos/portrait/hireMeVideoPortrait.mp4";
import hireMeVideoLandscape from "../../assets/videos/landscape/hireMeVideoLandscape.mp4";
import MenuBottom from "../menus/MenuBottom";
import PreloaderScreen from "../loadingSpinners/PreloaderScreen";
import { useState } from "react";
import PreloadableVideo from "../loadingSpinners/PreloadableVideo";
import ReactLogo from "../svg/ReactLogo";
import NodeLogo from "../svg/NodeLogo";
import TypeScriptLogo from "../svg/TypeScriptLogo";
import JavaScriptLogo from "../svg/JavaScriptLogo";
import PrismaLogo from "../svg/PrismaLogo";
import NextLogo from "../svg/NextLogo";
import TailwindCSSLogo from "../svg/TailwindCSSLogo";
import MongoDBLogo from "../svg/MongoDBLogo";
import RepositoryLogo from "../svg/RepositoryLogo";
import PostgreSqlLogo from "../svg/PostgreSqlLogo";


const HireScreen = () => {
  const { orientation } = UseOrientationContext();
  const moviePath = orientation ? hireMeVideoPortrait : hireMeVideoLandscape;
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <article id="HireScreen" className="">
      {!videoLoaded ? <PreloaderScreen /> : null}
      <PreloadableVideo videoPath={moviePath} onVideoLoaded={handleVideoLoad} />
      <span className="absolute w-[100vw] h-[100vh] bg-blackAlpha" />
      <NavBar classNameRBVCLogoBtn="text-lightGray" classNameGetStarted="text-lightGray" />
      <section className="flex self-center justify-center paddingYScreens  z-10  flex-col h-[80%] items-center max-w-[96vw] xl:max-w-[80vw] 2xl:max-w-[66vw]">
        <div className="flex flex-col p-2 overflow-y-auto md:flex-row margins">
          <section className="p-3 md:w-1/2">
            <p className="text-center underline text-bold text-golden underline-offset-2 decoration-lightBGray bounceTitles">
              HARD SKILLS
            </p>
            <div className="divHireScreen">
              <ReactLogo width="9rem" className="bounceTitlesDelay" />
              <ul >
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">ReactJS</li><br />
                <li className="liHireScreen">• Proficient</li>
                <li className="liHireScreen ">• Three years of experience in the professional market</li>
                <li className="liHireScreen">• Functional</li>
                <li className="liHireScreen">• UI / UX</li>
                <li className="liHireScreen">• CRUD</li>
                <li className="liHireScreen">• Performance</li>
                <li className="liHireScreen">• Life Cycle</li>
                <li className="liHireScreen">• Hooks</li>
                <li className="liHireScreen">• SOLID</li>
              </ul>

            </div>
            <div className="divHireScreen">
              <NodeLogo width="8.5rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">NodeJS</li><br />
                <li className="liHireScreen">• Proficient</li>
                <li className="liHireScreen">• Two years of experience in the professional market</li>
                <li className="liHireScreen">• Tokens</li>
                <li className="liHireScreen">• Error logs</li>
                <li className="liHireScreen">• Cryptography</li>
                <li className="liHireScreen">• Security</li>
                <li className="liHireScreen">• SOLID</li>
              </ul>  </div>
            <div className="divHireScreen">
              <TypeScriptLogo width="7rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">Type Script</li><br />
                <li className=" liHireScreen">• One year of experience in the professional market</li>
                <li className="liHireScreen">• Clean Code</li>
                <li className="liHireScreen">• SOLID</li>
              </ul>
            </div>
            <div className="divHireScreen">
              <JavaScriptLogo width="7rem" className="bounceTitlesDelay" />
              <ul >
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">Java Script</li><br />
                <li className="liHireScreen">• Proficient</li>
                <li className=" liHireScreen">• Three years of experience in the professional market</li>
                <li className="liHireScreen">• Clean Code</li>
                <li className="liHireScreen">• SOLID</li>
              </ul>
            </div>
            <div className="divHireScreen">
              <PrismaLogo width="7rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">Prisma ORM</li><br />
                <li className="liHireScreen">• One year of experience</li>
                <li className="liHireScreen">• Models</li>
                <li className="liHireScreen">• Advanced queries</li>
                <li className="liHireScreen">• Performance</li>
              </ul>
            </div>
            <div className="divHireScreen">
              <NextLogo width="9rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">NextJS 13</li><br />
                <li className="liHireScreen">• Proficient</li>
                <li className="liHireScreen">• Two years of experience in the professional market</li>
                <li className="liHireScreen">• Client side rendering (CSR)</li>
                <li className="liHireScreen">• Server side rendering (SSR)</li>
                <li className="liHireScreen">• Functional</li>
                <li className="liHireScreen">• UI / UX</li>
                <li className="liHireScreen">• CRUD</li>
                <li className="liHireScreen">• Performance</li>
                <li className="liHireScreen">• Tokens</li>
                <li className="liHireScreen">• Error logs</li>
                <li className="liHireScreen">• Cryptography</li>
                <li className="liHireScreen">• Security</li>
                <li className="liHireScreen">• SOLID</li>
              </ul>
            </div>
            <div className="divHireScreen">
              <TailwindCSSLogo width="13rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">TailwindCSS</li><br />
                <li className="liHireScreen">• Proficient</li>
                <li className=" liHireScreen">• Three years of experience in the professional market</li>
                <li className="liHireScreen">• Animations</li>
                <li className="liHireScreen">• Functions</li>
                <li className="liHireScreen">• Responsiveness</li>
                <li className="liHireScreen">• Classes</li>
              </ul>
            </div>
            <div className="divHireScreen">
              <MongoDBLogo width="9rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">MongoDB</li><br />
                <li className=" liHireScreen">• Two years of experience</li>
                <li className="liHireScreen">• Cloud</li>
                <li className="liHireScreen">• Server</li>
                <li className="liHireScreen">• Performance</li>
              </ul>
            </div>
            <div className="divHireScreen">
              <PostgreSqlLogo width="7rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">Postgre SQL</li><br />
                <li className=" liHireScreen">• One year of experience in the professional market</li>
                <li className="liHireScreen">• Server</li>
                <li className="liHireScreen">• Performance</li>
              </ul>
            </div>
            <div className="divHireScreen">
              <RepositoryLogo width="7rem" className="bounceTitlesDelay" />
              <ul>
                <li className="text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">Repositories</li><br />
                <li className="liHireScreen">• Proficient</li>
                <li className=" liHireScreen">• Three years of experience in the professional market</li>
                <li className="liHireScreen">• Git Hub</li>
                <li className="liHireScreen">• Bitbuket</li>
                <li className="liHireScreen">• GitLab</li>
              </ul>
            </div>
          </section>


          <section className="p-3 md:w-1/2">
            <p className="text-center underline text-bold text-golden underline-offset-2 decoration-lightBGray bounceTitles">
              SOFT SKILLS
            </p>
            <div className="flex flex-col justify-between gap-2 my-4">
              <p className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>&nbsp; I am the employee who wears the company's shirt in a way that delivers the best solutions thinking about efficiency and professionality, I put myself in the contractor's shoes in conjunction with the company's policies, always thinking about mvp, speed and quality, saving resources.<br />
                Proactive and autonomous, always respecting team or designation policies. <br />Efficient in communication, English and Portuguese.
              </p>
              <ul className="grid self-center grid-col">
                <li className="liHireScreenSoft">• Freelancer</li>
                <li className="liHireScreenSoft">• Full-Time</li>
                <li className="liHireScreenSoft">• Contractor</li>
                <li className="liHireScreenSoft">• FSLA</li>
              </ul>
              <p className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>&nbsp; As a React/Node and NextJS full stack developer, I have a strong background in building full-fledged web applications. With advanced knowledge in React, I can create interactive and responsive user interfaces while integrating with backend APIs and services. Leveraging Next.js, I optimize performance and rendering, ensuring a high-quality user experience.
                I have experience working in agile teams, collaborating effectively to deliver projects on time and within requirements. I tackle complex technical challenges and find innovative solutions for specific problems.
                Furthermore, I stay up-to-date with the latest development practices, actively participating in communities and constantly seeking to expand my technical expertise. I am passionate about learning and applying new technologies, ensuring that my work aligns with the latest industry trends.
                I am available for challenging opportunities as a React and NextJS full stack developer, and I am excited to contribute to project success with my experience and skills.
              </p>
              <ul className="grid self-center grid-col">
                <li className="liHireScreenSoft">• Scrum / Kanban</li>
                <li className="liHireScreenSoft">• OWSP</li>
                <li className="liHireScreenSoft">• LGPD</li>
                <li className="liHireScreenSoft">• Product Management</li>
                <li className="liHireScreenSoft">• Systems Analyst</li>
              </ul>

              <ul className="grid grid-col">
                <li className="py-1 my-2 text-center underline whitespace-normal text-golden underline-offset-2 decoration-lightBGray" >RBVC Soluções Técnologicas – Full Stack Developer / Self Employed</li>
                <li className="my-2 text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">May 2023 </li>
                <li className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>Small and medium-sized projects created from scratch. Fixing web projects as a freelancer. Maintenance and integration of new features as a freelancer.
                </li>
                <li className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>Analysis and planning of architecture as well as technologies, of web projects.
                  Testing and production support and maintenance
                </li>
                <li className="liHireScreenSoft">• ReactJS</li>
                <li className="liHireScreenSoft">• NextJS</li>
                <li className="liHireScreenSoft">• NodeJS</li>
                <li className="liHireScreenSoft">• JavaScript</li>
                <li className="liHireScreenSoft">• TypeScript</li>
                <li className="liHireScreenSoft">• Postgres </li>
                <li className="liHireScreenSoft">• HTML </li>
                <li className="liHireScreenSoft">• CSS </li>
                <li className="liHireScreenSoft">• MongoDB </li>
                <li className="liHireScreenSoft">• MongoAtlas </li>
                <li className="liHireScreenSoft">• Prisma </li>
                <li className="liHireScreenSoft">• Bit Bucket </li>
                <li className="liHireScreenSoft">• TailwindCSS </li>
              </ul>

              <ul className="grid grid-col">
                <li className="py-1 my-2 text-center underline whitespace-normal text-golden underline-offset-2 decoration-lightBGray" >GRAB&GO – HST – Full Stack Developer</li>
                <li className="my-2 text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">May 2022 to May 2023</li>
                <li className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>As part of an agile team where we created, maintained and developed new features for our own products and also products from other companies. Application in React Native(Meu Compromisso), in development and production environment, Playstore / AppStore. Web application (Grab&Go Digital Bank) not released yet. Web application (PicPresente).
                  Analysis and participation of new projects.
                </li>
                <li className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>Design and execution of new features. Maintenance and hotfixes. Publication on the AppStore and PlayStore.
                </li>
                <li className="liHireScreenSoft">• ReactJS</li>
                <li className="liHireScreenSoft">• React Native</li>
                <li className="liHireScreenSoft">• Redux</li>
                <li className="liHireScreenSoft">• Git</li>
                <li className="liHireScreenSoft">• BitBucket</li>
                <li className="liHireScreenSoft">• Jira </li>
              </ul>

              <ul className="grid grid-col">
                <li className="py-1 my-2 text-center underline whitespace-normal text-golden underline-offset-2 decoration-lightBGray bounceTitlesDelay" >Cadmus Soluções em TI – Systems Analyst – Trainee</li>
                <li className="my-2 text-center underline text-lightBGray underline-offset-2 decoration-golden">November 2021 to April 2022</li>
                <li className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>As part of an agile team of ten members, I maintained the database, performed maintenance and new features of a legacy system from Águas do Brasil, one of the largest companies in the sector of private concessions for water supply, sewage collection and treatment from Brazil.</li>
                <li className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>On an Oracle database, I performed correction of cohesive and incorrectly or inconsistently submitted data.
                  Hotfixes and features of the GabNetuno legacy system in C# and .Net.
                </li>
                <li className="liHireScreenSoft">Digital arts design in general. Single page website development.</li>
                <li className="liHireScreenSoft">• .Net</li>
                <li className="liHireScreenSoft">• C#</li>
                <li className="liHireScreenSoft">• BeeFor</li>
                <li className="liHireScreenSoft">• TerraForm</li>
                <li className="liHireScreenSoft">• BitBucket</li>
                <li className="liHireScreenSoft">• Oracle </li>
              </ul>

              <ul className="grid grid-col">
                <li className="py-1 my-2 text-center underline whitespace-normal text-golden underline-offset-2 decoration-lightBGray" >Autonomous</li>
                <li className="my-2 text-center underline text-lightBGray underline-offset-2 decoration-golden bounceTitlesDelay">February 2015 to January 2018</li>
                <li className="text-justify whitespace-normal text-lightBGray bounceTitles" style={{ lineHeight: "1.6" }}>Creation of small single page websites, small blogs with pluggable designs. Design of banners, menus, business card arts, awnings and souvenir printing designs.</li>
                <li className="liHireScreenSoft">Digital arts design in general. Single page website development.</li>
                <li className="liHireScreenSoft">• JavaScript</li>
                <li className="liHireScreenSoft">• ReactJS</li>
                <li className="liHireScreenSoft">• Fireworks</li>
                <li className="liHireScreenSoft">• Photoshop</li>
                <li className="liHireScreenSoft">• HTML</li>
                <li className="liHireScreenSoft">• CSS</li>
              </ul>

            </div>
          </section>
        </div>
      </section >
      <MenuBottom className="z-10 top-[94%]" />
    </article >
  );
};

export default HireScreen;

