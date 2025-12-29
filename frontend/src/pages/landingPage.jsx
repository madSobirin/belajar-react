import MainLayout from "../components/layouts/MainLayout";

const landingPage = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="bg-gray-800 p-6 rounded-lg">
        <p>Ini adalah konten halaman Dashboard.</p>
        {/* Form kontak kamu bisa ditaruh di sini */}
      </div>
    </MainLayout>
  );
};

export default landingPage;
