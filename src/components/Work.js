import ComingSoon from '../img/coomingSoon.png';
import NetRole from '../img/netrolelanding.png'


const Work = () => {
  return (
    <div id="work" className="work bg-primary text-center mb-32 pb-10">
      <h1 className="text-white text-5xl font-medium py-16">Work</h1>
      <div className="projects grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <img src={NetRole}    alt="project1" className="project-img"></img>
        <img src={ComingSoon} alt="project2" className="project-img"></img>
        <img src={ComingSoon} alt="project3" className="project-img"></img>
        <img src={ComingSoon} alt="project4" className="project-img"></img>
        <img src={ComingSoon} alt="project5" className="project-img"></img>
        <img src={ComingSoon} alt="project6" className="project-img"></img>
      </div>
    </div>
  );
};

export default Work;