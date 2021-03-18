const Sidebar = ({handleLinkClick}) => {
  return (
    <div className="side-bar bg-primary text-white lg:hidden">
      <ul className="text-3xl text-center">
        <a onClick={handleLinkClick} href="#home"><li className="sidebar-link">Home</li></a>
        <a onClick={handleLinkClick} href="#skills"><li className="sidebar-link">Skills</li></a>
        <a onClick={handleLinkClick} href="#about"><li className="sidebar-link">About</li></a>
        <a onClick={handleLinkClick} href="#work"><li className="sidebar-link">Work</li></a>
        <a onClick={handleLinkClick} href="#contact"><li className="sidebar-link">Contact</li></a>
      </ul>
    </div>
  );
};

export default Sidebar;