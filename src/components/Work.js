import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import ComingSoon from '../img/coomingSoon.png';
import NetRole from '../img/netrolelanding.png';
import SpaceXImg from '../img/spacex.png';
import Search from '../img/search.png';
import JokeGenerator from '../img/jokegenerator.png';
import TodoApp from '../img/todo.png';

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const links = [
    'https://zen-neumann-6a2026.netlify.app/',
    'https://spacex-tribute.netlify.app/',
    'https://musing-joliot-5c0360.netlify.app/',
    'https://razvan-movie.netlify.app/',
    'https://github.com/R0L3eX9/react-todo',
    'https://razvan-maracine.netlify.app/',
  ];

  const handleClick = (e) => {
    const clickedProjectIndex = e.target.id[0];
    const projectLink = links[clickedProjectIndex];
    window.open(projectLink, '_blank');
  };

  return (
    <div id="work" className="work bg-primary text-center mb-32 pb-10">
      <h1 data-aos="fade-down" data-aos-duration="800" className="text-white text-5xl font-medium py-16">Work</h1>
      <div className="projects grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <img className="project-img" onClick={handleClick} data-aos="fade" id="0-project" src={NetRole} alt="password generator project" />
        <img className="project-img" onClick={handleClick} data-aos="fade" id="1-project" src={SpaceXImg} alt="spacex tribute page" />
        <img className="project-img" onClick={handleClick} data-aos="fade" id="2-project" src={JokeGenerator} alt="joke generator" />
        <img className="project-img" onClick={handleClick} data-aos="fade" id="3-project" src={Search} alt="project4" />
        <img className="project-img" onClick={handleClick} data-aos="fade" id="4-project" src={TodoApp} alt="project5" />
        <img className="project-img" onClick={handleClick} data-aos="fade" id="5-project" src={ComingSoon} alt="project6" />
      </div>
    </div>
  );
};

export default Work;
