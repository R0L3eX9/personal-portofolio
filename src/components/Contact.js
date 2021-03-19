import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import { FiMail} from 'react-icons/fi';

const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, [])

  const handleClick = (e) => {
    const element = e.target;
    let website = "";
    if(element.childElementCount === 0) {
      website = element.farthestViewportElement.id;
    } else {
      website = element.id;
    }
    if(website === 'twitter') {
      window.open('https://twitter.com/MRazvan7', '_blank');
    } else if (website === 'linkedin') {
      window.open('https://www.linkedin.com/in/razvan-maracine-5a35021a7/', '_blank');
    } else if (website === 'github') {
      window.open('https://github.com/R0L3eX9', '_blank');
    }
  }

  return (
    <div  id="contact" className="contact bg-primary text-center">
      <h1 data-aos="fade-down" className="text-white text-5xl font-medium py-16">Contact</h1>
      <div data-aos="zoom-in" className="social-media flex flex-col justify-center items-center">
        <p className="text-secondary text-2xl font-bold">Work with me:</p>
        <div className="email flex py-10 justify-center itmes-center">
          <FiMail color="#5bf55b" size="2rem" />
          <p className="text-secondary font-bold text-lg cursor-pointer pl-4 hover:underline">razvan.cmaracine@gmail.com</p>
        </div>
        <div className="flex">
          <AiOutlineTwitter id="twitter" color="#5bf55b" size="2.5rem" className="m-4 cursor-pointer" onClick={handleClick} />
          <DiGithubBadge id="github" color="#5bf55b" size="2.5rem" className="m-4 cursor-pointer" onClick={handleClick} />
          <AiFillLinkedin id="linkedin" color="#5bf55b" size="2.5rem" className="m-4 cursor-pointer" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
export default Contact;
