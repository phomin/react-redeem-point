import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import DrawerBasic from "./components/Menu.jsx";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  const pathname = location.pathname; // Reactive way of getting the current path

  return (
    <>
      {pathname === "/login" && <></>}
      {pathname !== "/login" && <Navbar />}
      {pathname !== "/login" && <DrawerBasic />}
      <App />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);
