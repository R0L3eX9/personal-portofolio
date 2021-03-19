import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import ComingSoon from '../img/coomingSoon.png';
import NetRole from '../img/netrolelanding.png';
import SpaceXImg from '../img/spacex.png';
import JokeGenerator from '../img/jokegenerator.png';

const Work = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  const links = [
    'https://zen-neumann-6a2026.netlify.app/',
    'https://spacex-tribute.netlify.app/',
    'https://musing-joliot-5c0360.netlify.app/',
    'https://razvan-maracine.netlify.app/',
    'https://razvan-maracine.netlify.app/',
    'https://razvan-maracine.netlify.app/',
  ];

  const handleClick = (e) => {
    const clickedProjectIndex = e.target.id[0];
    const projectLink = links[clickedProjectIndex];
    window.open(projectLink, '_blank');
  }

  return (
    <div id="work" className="work bg-primary text-center mb-32 pb-10">
      <h1 className="text-white text-5xl font-medium py-16">Work</h1>
      <div className="projects grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <img data-aos="zoom-in" id="0-project" src={NetRole}    alt="password generator project" className="project-img" onClick={handleClick}></img>
        <img data-aos="zoom-in" id="1-project" src={SpaceXImg} alt="spacex tribute page" className="project-img" onClick={handleClick}></img>
        <img data-aos="zoom-in" id="2-project" src={JokeGenerator} alt="joke generator" className="project-img" onClick={handleClick}></img>
        <img data-aos="zoom-in" id="3-project" src={ComingSoon} alt="project4" className="project-img" onClick={handleClick}></img>
        <img data-aos="zoom-in" id="4-project" src={ComingSoon} alt="project5" className="project-img" onClick={handleClick}></img>
        <img data-aos="zoom-in" id="5-project" src={ComingSoon} alt="project6" className="project-img" onClick={handleClick}></img>
      </div>
    </div>
  );
};

export default Work;
