const Footer = () => {
  return (
    <div className="text-xs flex flex-col lg:flex-row justify-center items-center gap-4 py-4">
      <div className="flex gap-x-4 justify-center">
        <div className="flex items-center">
          <p className="text-sm">Powered by</p>
          <div className="w-24 h-auto">
            <img src="/berth.png" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
