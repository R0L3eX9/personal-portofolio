import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';


const Navbar = () => {

  const [burgerState, setBurgerState] = useState(false);
  const handleClick = () => {
    setBurgerState(!burgerState);
  }
  const handleLinkClick = () => {
    setBurgerState(false);
  }
  

  return (
    <div className="nav-bar">
      <nav className="flex bg-primary text-white items-center justify-between">
        <h1 className="text-5xl py-3 pl-10 font-bold">RM</h1>
        <FiMenu onClick={handleClick} size={"3rem"} className="cursor-pointer m-2 lg:hidden" />
        <div className="hidden lg:block">
          <ul className="text-2xl flex">
            <a href="#about">   <li className="nav-link">Home</li></a>
            <a href="#skills">  <li className="nav-link">Skills</li></a>
            <a href="#about">   <li className="nav-link">About</li></a>
            <a href="#work">    <li className="nav-link">Work</li></a>
            <a href="#contact"> <li className="nav-link">Contact</li></a>
          </ul>
        </div>
      </nav>
      {burgerState  && <Sidebar handleLinkClick={handleLinkClick}/>}
    </div>
    
  );
};

export default Navbar;