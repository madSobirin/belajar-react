import MainLayout from "../components/layouts/MainLayout";

const Artikel = () => {
  return (
    <MainLayout title="Artikel">
      <div className="bg-gray-800 p-6 rounded-lg">
        <p>Ini adalah konten halaman artikel.</p>
        {/* Form kontak kamu bisa ditaruh di sini */}
      </div>
    </MainLayout>
  );
};

export default Artikel;
