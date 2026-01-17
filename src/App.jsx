// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sewa from "./pages/Sewa";
import Solusi from "./pages/Solusi";
import Pesan from "./pages/Pesan";
import "./index.css";
import "./i18n";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar tetap di sini */}
      <Navbar />

      <ScrollToTop />

      {/* HAPUS div pt-20 DISINI. Biarkan Routes 'telanjang' agar Hero bisa full screen */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sewa" element={<Sewa />} />
          <Route path="/solusi" element={<Solusi />} />
          <Route path="/pesan" element={<Pesan />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
