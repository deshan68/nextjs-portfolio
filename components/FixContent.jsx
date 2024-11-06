import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaEnvelope,
} from "react-icons/fa";
import { resume_url } from "@constants";

const FixContent = ({ activeSection, setActiveSection }) => {
  const NavBarItem = ({ item }) => {
    const isActive = activeSection === item;

    return (
      <li
        onClick={() => {
          setActiveSection(item);
        }}
        // className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out ${
        //   isActive ? "text-white" : "text-gray-500"
        // }`}
        className="flex items-center cursor-pointer text-gray-500"
      >
        <div
          // className={`transition-all duration-300 ease-in-out ${
          //   isActive ? "w-10 bg-white" : "w-5 bg-gray-500"
          // }`}
          className="flex items-center cursor-pointer w-5 bg-gray-500"
          style={{
            height: "0.5px",
          }}
        />
        <span className="ml-2">{item}</span>
      </li>
    );
  };

  const SocialIcons = () => {
    return (
      <div className="flex gap-6">
        <a href="https://github.com/DESHAN68" target="_blank">
          <FaGithub
            className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
            size={25}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/arun-deshan-936914203/"
          target="_blank"
        >
          <FaLinkedin
            className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
            size={25}
          />
        </a>
        <a
          href="https://www.instagram.com/arundesh_68/?utm_source=qr"
          target="_blank"
        >
          <FaInstagram
            className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
            size={25}
          />
        </a>
        <a href="https://medium.com/@arundeshan" target="_blank">
          <FaMedium
            className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
            size={25}
          />
        </a>
        <a href="mailto:arundeshan@gmail.com">
          <FaEnvelope
            className="cursor-pointer text-gray-400 hover:text-white transition duration-300"
            size={25}
          />
        </a>
      </div>
    );
  };

  const ResumeLink = (
    <a
      className="text-xs cursor-pointer text-teal-300 border-teal-300 border px-4 py-2 rounded-sm"
      href={resume_url}
      target="_blank"
    >
      View Full Résumé
    </a>
  );

  return (
    <div className="lg:w-1/2 flex flex-col lg:gap-y-0 gap-y-6 lg:py-20 py-10 lg:pl-36 pl-5 text-white justify-between">
      <div className="flex flex-col gap-y-3">
        <span className="text-6xl font-bold font-leagueSemiBold">
          Arun Deshan
        </span>
        <span className="text-2xl font-normal font-leagueLight">
          Software Engineer
        </span>
        <p className="font-light text-lg text-gray-500 leading-tight font-leagueLight">
          Continuously exploring challenges,
          <br />
          where digital innovation can create impactful solutions ✨
        </p>
        <div>{ResumeLink}</div>
      </div>

      <ul className="list-none lg:flex flex-col items-start gap-6 text-sm font-extralight font-leagueLight hidden">
        {["ABOUT", "EXPERIENCES", "PROJECTS", "WRITING"].map((item) => (
          <NavBarItem item={item} key={item} />
        ))}
      </ul>

      <SocialIcons />
    </div>
  );
};

export default FixContent;
