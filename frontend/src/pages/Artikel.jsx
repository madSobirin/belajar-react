import MainLayout from "../components/layouts/MainLayout";
import { useState, useEffect } from "react";
import { getArtikel } from "../services/api";
const Artikel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const result = await getArtikel();
        setData(result);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);
  return (
    <MainLayout title="Artikel">
      {loading ? (
        <p>Sabar, lagi loading...</p>
      ) : (
        <div className="grid gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gray-800 rounded-lg border border-white/10"
            >
              <h2 className="text-xl font-bold text-indigo-400">
                {item.title}
              </h2>
              <p className="text-gray-400">{item.content}</p>
            </div>
          ))}
        </div>
      )}
    </MainLayout>
  );
};

export default Artikel;
