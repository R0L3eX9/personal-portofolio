const Sidebar = () => {
  return (
    <div className="side-bar bg-primary text-white lg:hidden">
      <ul className="text-3xl text-center">
        <a href="#home"><li className="sidebar-link">Home</li></a>
        <a href="#skills"><li className="sidebar-link">Skills</li></a>
        <a href="#about"><li className="sidebar-link">About</li></a>
        <a href="#work"><li className="sidebar-link">Work</li></a>
        <a href="#contact"><li className="sidebar-link">Contact</li></a>
      </ul>
    </div>
  );
};

export default Sidebar;