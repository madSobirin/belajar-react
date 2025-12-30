const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

let artikel = [
  {
    id: 1,
    title: "Belajar Express Itu menyenangkan yayu",
    content: "Isi artikel 1",
  },
  {
    id: 2,
    title: "React + Axios Tutorial",
    content: "Isi artikel 2",
  },
  {
    id: 2,
    title: "React + Axios Tutorial",
    content: "Isi artikel 2",
  },
];

app.get("/api/artikel", (req, res) => {
  res.json(artikel);
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
