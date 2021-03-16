const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="work" className="work bg-black text-center">
      <h1 className="text-white text-xl font-medium py-6">{`${year} Razvan Maracine`}</h1>
    </div>
  );
};

export default Footer;