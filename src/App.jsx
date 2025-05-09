import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
