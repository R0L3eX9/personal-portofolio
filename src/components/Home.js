import Picture from '../img/picture.jpg';
import Typical from 'react-typical';

const Home = () => {
  return (
    <div className="home py-20" id="home">
      <div className="content flex flex-col md:flex-row justify-center items-center">
        <img src={Picture} alt="me" className="w-60 m-2 rounded-2xl shadow-lg"></img>
        <div className="text-center m-2">
          <h1 className="text-3xl font-semibold p-5">Hi, I am Razvan Maracine</h1>
          {/* <p className="text-2xl">- Web Developer -</p> */}
          <p className="text-2xl">
            <Typical
              steps={['web developer', 1000, 'student', 500, 'competitive programmer', 1000]}
              loop={Infinity}
              wrapper="p"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;