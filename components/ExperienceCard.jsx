import { wso2_experience } from "@constants";

const { default: Chip } = require("./Chip");

const ExperienceCard = () => {
  return (
    <div className="text-base px-5 cursor-default flex w-full gap-x-5 transition ease-in-out duration-500 transform hover:bg-white/5 hover:backdrop-blur-lg hover:shadow-lg rounded-lg p-5">
      <div className="w-1/5">JAN - JUN 2024</div>
      <div className="w-4/5 flex flex-col gap-y-3">
        <div className="text-white font-bold">
          <span>Software Engineer Intern </span> ·
          <span className="cursor-pointer text-white transition ease-in-out hover:text-orange-500 duration-300">
            <a href="https://wso2.com/" target="_blank">
              {" "}
              WSO2
            </a>
          </span>
        </div>
        <ul className="list-disc">
          {wso2_experience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex text-xs pt-3 flex-wrap gap-2">
          {[
            "TypeScript",
            "Ballerina",
            "React",
            "Redux",
            "MUI",
            "MySQL",
            "Choreo",
          ].map((item) => (
            <Chip key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
