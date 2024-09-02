const ExperienceCard = () => {
  return (
    <div className="text-base px-5 cursor-pointer flex w-full gap-x-5 transition ease-in-out duration-500 transform hover:bg-white/5 hover:backdrop-blur-lg hover:shadow-lg rounded-lg p-5">
      <div className="w-1/5">JAN - JUN 2024</div>
      <div className="w-4/5 flex flex-col gap-y-3">
        <div className="text-white font-bold">
          <span>Fullstack Developer Intern </span> ·
          <span className="cursor-pointer text-white transition ease-in-out hover:text-orange-500 duration-300">
            <a href="https://wso2.com/" target="_blank">
              {" "}
              WSO2
            </a>
          </span>
        </div>
        <p className="leading-tight">
          Developed an Application Tracking System: This included creating job
          requisitions, assigning recruiters, managing vacancies, publishing
          them on the career webpage, adding candidates, reviewing CVs. During
          the development process, I handled both the front-end as well as the
          back- end, ensuring that both functions worked seamlessly together.
        </p>
        <div className="flex text-xs pt-3 flex-wrap gap-2">
          {["TypeScript", "Ballerina", "React.js", "MUI", "MySQL"].map(
            (item) => (
              <div
                key={item}
                className="rounded-full bg-teal-300/10 text-teal-300 px-2 py-0.5"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
