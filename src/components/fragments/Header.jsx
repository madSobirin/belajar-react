const Header = ({ title }) => {
  return (
    <div>
      <header className="bg-gray-800 shadow-sm border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
