import Picture from '../img/picture.jpg';

const About = () => {
  return (
    <div id="about" className="about bg-white text-center pb-16">
      <h1 className="text-primary text-5xl font-medium py-16">About</h1>
        <div className="informations px-10 flex flex-col justify-center items-center lg:flex-row-reverse">
          <img src={Picture} alt="me" className="w-60 rounded-2xl shadow-lg m-6 lg:w-96 lg:ml-20"></img>
          <div className="lg:w-2/5 text-lg md:text-xl">
            <p className="pb-6">
              Hello, I am Razvan Maracine and I am a Web Developer.
              I am from Romania and I am still a student currently being 17 years old I look forward to created
              projects and learn everything I cand also being pasionat about Space.
              My goal is to make inovations in technology and also help others to create someting
              that will benefit all of us.
            </p>
            <p>
              I like to do both front-end and back-end but my time I preety much spend it
              on competitive programming, I really enjoy learning algorithms and data structures in C++.
              I started programming when I was 15 years old starting with Python and then I started learning
              C++ for school and I got introduced to competitive programming and I train everday.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;