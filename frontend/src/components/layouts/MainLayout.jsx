import Navbar from "../fragments/Navbar";
import Header from "../fragments/Header";

const MainLayout = ({ title, children }) => {
  return (
    <div className="min-h-full bg-gray-900 text-white">
      <Navbar />
      <Header title={title} />
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
