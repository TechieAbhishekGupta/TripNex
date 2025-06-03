import React from "react";
import "./App.css";
import Hero from "./components/custom/Hero";
import Header from "./components/custom/Header.jsx";
import { Toaster } from "./components/ui/sonner.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./view-trip/components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Toaster />
        {/* Outlet should take all available space */}
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
