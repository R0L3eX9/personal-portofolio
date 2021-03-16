import { DiGithubBadge, DiMongodb, DiNodejsSmall, DiReact, DiTerminal } from 'react-icons/di';
import { FcLinux } from "react-icons/fc";
import { SiTailwindcss } from "react-icons/si";
const Skills = () => {
  return (
    <div id="skills" className="skills bg-primary text-center">
      <h1 className="text-white text-5xl font-medium py-16">Skills</h1>
      <div className="icons flex flex-col md:flex-row pb-20 items-center justify-around">
        <DiMongodb size="8rem" color="#4CAF50" />
        <DiNodejsSmall size="8rem" color="#3B8739" />
        <DiReact size="8rem" color="#41E0FD" />
        <SiTailwindcss size="8rem" color="#06B6D4" />
        <DiGithubBadge size="8rem" color="#4f4e4e" />
        <FcLinux size="8rem" />
        <DiTerminal size="8rem" color="white" />   
      </div>
    </div>
  );
};

export default Skills;