import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Picture from '../img/picture.jpg';

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])

  return (
    <div id="about" className="about bg-white text-center pb-16">
      <h1 data-aos="fade-down" className="text-primary text-5xl font-medium py-16">About</h1>
        <div className="informations px-10 flex flex-col justify-center items-center lg:flex-row-reverse">
          <img src={Picture} data-aos="zoom-in" alt="me" className="w-60 rounded-2xl shadow-lg m-6 lg:w-96 lg:ml-20"></img>
          <div data-aos="zoom-in" className="lg:w-2/5 text-lg md:text-xl">
            <p className="pb-6">
              Hello, I am Razvan Maracine and I am a Web Developer.
              I am from Romania and I am still a student currently being 17 years old I look forward to learn
              new technologys and learn as much as I can. I am also pasionat about space and our universe.
              My goal is to make inovations in technology and help others to create someting
              that will benefit all of us.
            </p>
            <p>
              I have started programming in 2019 when I was 15 years old, I started by learning Python, and after learning
              the syntax I created some small console applications. In our school we use C++ for algorithms, so after Python I
              started learning C++ and at the same time I got introduced to Competitive Programming because of a video on youtube.
              Now I found my passions which are Web Development and Competitive Programming, so I try to do them both daily and
              I aspire to become a back-end developer.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
