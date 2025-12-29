import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import LandingPage from "./pages/landingPage.jsx";
import Artikel from "./pages/Artikel.jsx";
import Kontak from "./pages/Kontak.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/artikel",
    element: <Artikel />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
